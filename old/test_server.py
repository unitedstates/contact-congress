import app as server
from utils import load_data, locate_member_ids, SQLAlchemy
import models
import unittest
from urlparse import parse_qs
from requests.compat import urlencode, urlparse
import lxml

def url_for(action, **params):
    url = ('/' if action[0] != '/' else '') + action
    if params:
        url += '?' +  urlencode(params, doseq=True)
    return url

# hack for testing
server.url_for = url_for

id_pelosi = 'P000197'
id_boxer = 'B000711'
id_cardenas = 'C001097'


class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        server.app.config.from_object('config.ConfigTesting')
        self.db = SQLAlchemy()
        self.db.app = server.app
        models.setUp(server.app)
        self.app = server.app.test_client()
        self.campaigns, self.legislators, self.districts = load_data()

        # a default example where just Rep. Nacy Pelosi is called
        self.example_params = dict(
            campaignId='default',
            repIds=[id_pelosi],
            userPhone='415-000-1111',
            zipcode='95110')

    def post_tree(self, path, **params):
        req = self.app.post(url_for(path, **params))
        tree = lxml.etree.fromstring(req.data)
        return tree


    def parse_url(self, urlstring):
        url = urlparse(urlstring)
        return url, dict((k, v if len(v)>1 else v[0])
            for k, v in parse_qs(url.query).iteritems())

    def assert_is_xml(self, req):
        assert(req.data.startswith('<?xml'))

    def assert_zip_ask(self, req, params):
        self.assert_is_xml(req)
        gather = lxml.etree.fromstring(req.data).find('Gather')
        gparams = dict(gather.items())
        assert(gparams['numDigits'] == "5")
        # and should redirect to handler
        assert('/zip_parse' in gparams['action'])
        
    def assert_has_rep_intro(self, node, campaign):
        msg = campaign['msg_rep_intro'].split('{')[0]
        assert(node.tag == 'Say' and node.text.startswith(msg))

    #def tearDown(self):
    #    models.tearDown(self.db)

    def test_location_lookup(self):
        campaign = dict(target_house=True, target_senate=True)
        # San Francisco
        member_ids = locate_member_ids('94110', campaign, 
            self.districts, self.legislators)
        assert(len(member_ids) == 3)
        assert('Pelosi' in self.legislators.ix[member_ids].lastname.tolist())
        
        # San Francisco - just senate
        senate_ids = locate_member_ids('94110', 
            dict(target_senate=True, target_house=False),
            self.districts, self.legislators
            )
        assert(len(senate_ids) == 2)

        # Seattle
        member_ids = locate_member_ids('98112', campaign, 
            self.districts, self.legislators)
        # the 98112 zipcode contains two districts - thus 2 House members
        assert(len(member_ids) == 4)
    
    

    def test_incoming_call(self):
        '''test incoming call - asks for zipcode'''
        params = dict(campaignId='default')
        req = self.app.post(url_for('incoming_call', **params))
        self.assert_zip_ask(req, params)
        
        
    def test_zip_ask(self):
        '''
        test with no repId parameter
        should redirect to ask for zipcode
        '''
        params = dict(campaignId='default', userPhone='415-000-1111')
        req = self.app.post(url_for('connection', **params))
        self.assert_zip_ask(req, params)
        tree = lxml.etree.fromstring(req.data)
        url, qparams = self.parse_url(
            dict(tree.find('Gather').items())['action'])
        assert(url.path == '/zip_parse')
        
        zipcode = '94110'
        tree = self.post_tree(url.geturl() + "&Digits={}".format(zipcode))
        assert(tree[0].tag == 'Say') # call block intro
        url, qparams = self.parse_url(tree[1].text)
        assert(qparams['userPhone'] == params['userPhone'])
        assert(qparams['zipcode'] == zipcode)
        
    
    def test_zip_given(self):
        campaign = self.campaigns['default']
        params = dict(zipcode='95110', 
            campaignId='default', userPhone='1234567890')
        tree = self.post_tree('connection', **params)
        assert(campaign['msg_intro'] == tree[0].text)
        assert(tree.find('Gather') is None)

    
    def test_making_single_call(self):
        campaign = self.campaigns['default']
        params = dict(self.example_params)
        
        # test with connection, given repIds
        req = self.app.post(url_for('connection', **params))
        tree = lxml.etree.fromstring(req.data)
        # the intro message gets played first
        assert(campaign['msg_intro'] == tree[0].text)
        # then there is a redirect to make a single call
        redirect_url = tree.find('Redirect').text
        url, qparams = self.parse_url(redirect_url)
        assert(url.path == '/make_single_call')
        assert(qparams['call_index'] == '0')
        assert([qparams['repIds']] == params['repIds'])
        
        # if we follow that redirect to make a call
        req = self.app.post(url.geturl())
        tree = lxml.etree.fromstring(req.data)
        # intro the representative
        self.assert_has_rep_intro(tree[0], campaign)
        # and make the dial
        assert(tree[1].tag == 'Dial' and tree[1].text == "202-225-4965")
        dial_attrs = dict(tree[1].items())
        assert(dial_attrs['hangupOnStar'] == 'true')
        redirect_url = dial_attrs['action']
        url, qparams = self.parse_url(redirect_url)
        assert(url.path == '/call_complete')
        assert(qparams['call_index'] == '0')
        assert([qparams['repIds']] == params['repIds'])
        
        # on completion of that call
        # (assume that it completed successfully and lasted 2min)
        qparams.update(dict(
            DialCallStatus='Completed',
            DialCallDuration=120))
        req = self.app.post(url_for(url.path, **qparams))
        tree = lxml.etree.fromstring(req.data)
        # there was only one rep - so just final thanks
        assert(len(tree) == 1 and tree[0].tag == 'Say' \
            and tree[0].text == campaign['msg_final_thanks'])
        
        # and ensure that one call got logged to the db
        call = models.Call.query.first()
        assert(call.areacode == '415')
        assert(call.exchange == '000')
        assert(call.zipcode == self.example_params['zipcode'])
        assert(call.member_id == id_pelosi)
        assert(call.status == qparams['DialCallStatus'])
        assert(call.duration == qparams['DialCallDuration'])


    def test_preset_reps(self):
        params = dict(campaignId='call-Ted-Cruz', userPhone='123-456-7890')
        campaign = server.get_campaign(params['campaignId'])
        req = self.app.post(url_for('connection', **params))
        tree = lxml.etree.fromstring(req.data)
        # main intro msg
        assert(campaign['msg_intro'] == tree[0].text)
        # and then redirect to make call based on campaign's repIds
        url, qparams = self.parse_url(tree.find('Redirect').text)
        assert(url.path == '/make_single_call')
        assert([qparams['repIds']] == campaign['repIds'])
        

    def test_multi_calls(self):
        params = dict(self.example_params)
        campaign = server.get_campaign('default')
        # call both Pelosi and Boxer
        params['repIds'].append(id_boxer)
        # connect
        tree = self.post_tree('connection', **params)
        
        for i, repId in enumerate(params['repIds']):
            url, qparams = self.parse_url(tree.find('Redirect').text)
            assert(url.path == '/make_single_call')
            assert(qparams['call_index'] == str(i))
            assert(qparams['repIds'] == params['repIds'])
        
            # if we follow that redirect to make a call
            tree = self.post_tree(url.geturl())
            rep_phone = self.legislators.ix[repId, 'phone']
            assert(tree[1].tag == 'Dial' and tree[1].text == rep_phone)
            url, qparams = self.parse_url(dict(tree[1].items())['action'])
            # dial action should go to call_complete 
            assert(url.path == '/call_complete')
            assert(qparams['call_index'] == str(i))
            assert(qparams['repIds'] == params['repIds'])
        
            # assume call success
            tree = self.post_tree(url.path, **dict(
                DialCallStatus='Success', DialCallDuration=60, **qparams))
                
            call = models.Call.query.order_by(models.Call.timestamp).all()[-1]
            assert(call.member_id == repId)
            
        else:
            assert(len(tree) == 1 and tree[0].tag == 'Say' \
                and tree[0].text == campaign['msg_final_thanks'])
            assert(models.Call.query.count() == len(params['repIds']))


    def test_unicode_name(self):
        params = dict(self.example_params)        
        params['repIds'] = [id_cardenas]
        req = self.app.post(url_for('make_single_call', **params))
        assert("We're now connecting you to Tony C&#225;rdenas" in req.data)
        
        
if __name__ == '__main__':
    unittest.main()
