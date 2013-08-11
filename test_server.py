import server
from server import locate_member_ids
import unittest
from requests.compat import urlencode

def url_for(action, params=None):
    url = '/' + action
    if params:
        url += '?' +  urlencode(params, doseq=True)
    return url
    
def assert_new_connection(req, params):
    assert(req.data.startswith('<?xml'))
    # should ask for number of digits
    assert('Gather' in req.data)
    assert('numDigits="5"' in req.data)
    # and should redirect to handler
    assert(url_for('zip_parse', params) in req.data)
    
class FlaskrTestCase(unittest.TestCase):

    def setUp(self):
        server.app.config.from_object('config.ConfigTesting')
        self.app = server.app.test_client()
        self.campaigns, self.congress = server.load_data()


    def test_location_lookup(self):
        member_ids = locate_member_ids('94110')
        assert(len(member_ids) == 3)
        assert('Pelosi' in self.congress.ix[member_ids].last_name.tolist())
        
        senate_ids = locate_member_ids('94110', 
            dict(target_senate=True, target_house=False))
        assert(len(senate_ids) == 2)
    
    def test_connection(self):
        '''connect to dial Rep. Pelosi'''
        params = dict(
            campaignId='default',
            repIds=['P000197']
            )
        req = self.app.post(url_for('connection', params))
        assert(req.data.startswith('<?xml'))
        assert("202-225-4965</Dial>" in req.data)
    
    
    def test_redirected_connection_call(self):
        '''
        test with no repId parameter
        should redirect to ask for zipcode
        '''
        params = dict(campaignId='default')
        req = self.app.post(
            url_for('connection', params), 
            follow_redirects=True)
        assert_new_connection(req, params)
    
        
    def test_incoming_call(self):
        '''test incoming call - asks for zipcode'''
        params = dict(campaignId='default')
        req = self.app.post(url_for('incoming_call', params))
        assert_new_connection(req, params)


if __name__ == '__main__':
    unittest.main()