import pandas as pd
from flask.ext.sqlalchemy import SQLAlchemy
from ipdb import set_trace

def get_database(app):
    return SQLAlchemy(app)

# load data into db
def load_data():
    legislators = pd.read_csv('data/legislators.csv').set_index('bioguide_id')
    legislators = legislators[legislators.in_office == True]
    # fill in missing chamber data field
    legislators['chamber'] = ''
    legislators.ix[legislators.senate_class.isnull(), 'chamber'] = 'house'
    legislators.ix[legislators.senate_class.notnull(), 'chamber'] = 'senate'
    
    districts = pd.read_csv('data/districts.csv', 
        header=None, 
        names=['zipcode', 'state', 'district_number'],
        dtype={'zipcode': str}).sort('zipcode').set_index('zipcode')
    
    campaigns = pd.read_json('data/campaigns.json').set_index('id')
    
    return campaigns, legislators, districts
    
def play_or_say(resp, msg):
    # take twilio response and play or say a mesage
    if msg.startswith('http'):
        resp.play(msg)
    else:
        resp.say(msg)
    return
    
def get_senators(legislators, district):
    return legislators[
        (legislators.chamber == 'senate') & 
        (legislators.state == district['state'])
        ].index.tolist()
def get_house_members(legislators, district):
    return legislators[
        (legislators.chamber == 'house') &
        (legislators.state == district['state']) &
        (legislators.district == str(district['district_number']))
        ].index.tolist()

def locate_member_ids(zipcode, campaign, districts, legislators):
    '''get congressional member ids from zip codes to districts data'''
    district = districts.ix[zipcode]
    member_ids = []
    
    individual_target = campaign.get('target_member_id', None)
    if individual_target:
        member_ids = [individual_target]
        return member_ids
    
    # filter list by campaign target_house, target_senate
    if campaign.get('target_senate', True) and \
        not campaign.get('target_house_first', False):
        member_ids.extend(get_senators(legislators, district))
        
    if campaign.get('target_house', True):
        member_ids.extend(get_house_members(legislators, district))

    if campaign.get('target_senate', True) and \
        campaign.get('target_house_first', True):
        member_ids.extend(get_senators(legislators, district))
        
    return member_ids