#
from political_data import PoliticalData

class TestData():
    def setUp(self):
        self.data = PoliticalData()

    def test_legislators(self):
        assert self.data.legislators is not None

        legislator = self.data.legislators[0]

        assert legislator['chamber'] == 'house'

    def test_locate_member_ids(self):
        ids = self.data.locate_member_ids(
            '98004', self.data.campaigns['stop-fast-track'])

        assert len(ids) == 4
        assert ids[0]['bioguide_id'] == 'C000127'
