import app as server
from utils import load_data, locate_member_ids, SQLAlchemy, set_trace
import models
import unittest
from requests.compat import urlencode

def url_for(action, **params):
    url = '/' + action
    if params:
        url += '?' +  urlencode(params, doseq=True)
    return url

# hack for testing
server.url_for = url_for

def assert_new_connection(req, params):
    assert(req.data.startswith('<?xml'))
    # should ask for number of digits
    assert('Gather' in req.data)
    assert('numDigits="5"' in req.data)
    # and should redirect to handler
    assert(url_for('zip_parse', **params) in req.data)
    
id_pelosi = 'P000197'

class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        server.app.config.from_object('config.ConfigTesting')
        self.db = SQLAlchemy()
        self.db.app = server.app
        models.setUp(server.app)
        self.app = server.app.test_client()
        self.campaigns, self.legislators, self.districts = load_data()

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

    
    def test_connection(self):
        '''connect to dial Rep. Pelosi'''
        params = dict(
            campaignId='default',
            repIds=[id_pelosi]
            )
        req = self.app.post(url_for('connection', **params))
        assert(req.data.startswith('<?xml'))
        assert("202-225-4965</Dial>" in req.data)
    
    
    def test_redirected_connection_call(self):
        '''
        test with no repId parameter
        should redirect to ask for zipcode
        '''
        params = dict(campaignId='default')
        req = self.app.post(
            url_for('connection', **params), 
            follow_redirects=True)
        assert_new_connection(req, params)
    
        
    def test_incoming_call(self):
        '''test incoming call - asks for zipcode'''
        params = dict(campaignId='default')
        req = self.app.post(url_for('incoming_call', **params))
        assert_new_connection(req, params)
        
    
    def test_making_calls(self):
        params = dict(repIds=[id_pelosi], campaignId='default')
        campaign = self.campaigns['default']
        req = server.make_calls(params, campaign)
        assert(campaign['msg_call_block_intro'].split('{')[0] in req)
        assert(req.count(campaign['msg_rep_intro'].split('{')[0]) == 1)
        
    
    def test_call_complete(self):
        params = dict(
            campaignId='default',
            zipcode='94110',
            userPhone='415-999-0000',
            member_id=id_pelosi, 
            DialCallStatus='Completed',
            DialCallDuration=120
            )
        self.app.post('call_complete', data=params)
        call = models.Call.query.first()
        assert(call.areacode==415)
        assert(call.exchange==999)
        assert(call.member_id == id_pelosi)

if __name__ == '__main__':
    unittest.main()