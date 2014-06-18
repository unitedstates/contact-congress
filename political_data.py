import csv
import yaml


class PoliticalData():
    def __init__(self):
        """
        Load data in database
        """
        legislators = []

        with open('data/legislators.csv') as f:
            reader = csv.DictReader(f)

            for legislator in reader:
                if legislator['senate_class']:
                    legislator['chamber'] = 'senate'
                else:
                    legislator['chamber'] = 'house'

                legislators.append(legislator)

        legislators = [l for l in legislators if l['in_office'] == '1']

        districts = []

        with open('data/districts.csv') as f:
            reader = csv.DictReader(
                f, fieldnames=['zipcode', 'state', 'district_number'])

            for district in reader:
                districts.append(district)

        with open('data/campaigns.yaml', 'r') as f:
            campaigns = {c['id']: c for c in yaml.load(f.read())}

        self.campaigns = campaigns
        self.legislators = legislators
        self.districts = districts

    def get_campaign(self, campaign_id):
        if campaign_id in self.campaigns:
            return dict(self.campaigns['default'],
                        **self.campaigns[campaign_id])

    def get_senators(self, districts):
        states = [d['state'] for d in districts]

        return [l for l in self.legislators
                if l['chamber'] == 'senate'
                and l['state'] in states]

    def get_house_members(self, districts):
        states = [d['state'] for d in districts]
        district_numbers = [d['district_number'] for d in districts]

        return [l for l in self.legislators
                if l['chamber'] == 'house'
                and l['state'] in states
                and l['district'] in district_numbers]

    def locate_member_ids(self, zipcode, campaign):
        """get congressional member ids from zip codes to districts data"""
        local_districts = [d for d in self.districts
                           if d['zipcode'] == str(zipcode)]
        member_ids = []

        individual_target = campaign.get('target_member_id', None)

        if individual_target:
            member_ids = [individual_target]
            return member_ids

        # filter list by campaign target_house, target_senate
        if campaign.get('target_senate') and \
                not campaign.get('target_house_first'):
            member_ids.extend([s['bioguide_id']
                               for s in self.get_senators(local_districts)])

        if campaign.get('target_house'):
            member_ids.extend([h['bioguide_id'] for h
                               in self.get_house_members(local_districts)])

        if campaign.get('target_senate') and \
                campaign.get('target_house_first'):
            member_ids.extend([s['bioguide_id']
                               for s in self.get_senators(local_districts)])

        return member_ids
