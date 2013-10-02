import pandas as pd
import yaml
import pystache
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
    
    # campaigns = pd.read_json('data/campaigns.json').set_index('id')
    with open('data/campaigns.yaml', 'r') as f:
        campaigns = {c['id']: c for c in yaml.load(f.read())}
    
    return campaigns, legislators, districts
    
def play_or_say(resp, msg_template, **kwds):
    # take twilio response and play or say a mesage
    # can use mustache templates to render keword arguments
    msg = pystache.render(msg_template, kwds)
    if msg.startswith('http'):
        resp.play(msg)
    else:
        resp.say(msg)
    return
    
def get_senators(legislators, districts):
    return legislators[
        (legislators.chamber == 'senate') & 
        (legislators.state == districts['state'].iloc[0])
        ].index.tolist()
def get_house_members(legislators, districts):
    return legislators[
        (legislators.chamber == 'house') &
        (legislators.state.isin(districts['state'])) &
        (legislators.district.isin(districts['district_number'].astype(str)))
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
    if campaign.get('target_senate') and \
        not campaign.get('target_house_first'):
        member_ids.extend(get_senators(legislators, district))
        
    if campaign.get('target_house'):
        member_ids.extend(get_house_members(legislators, district))

    if campaign.get('target_senate') and campaign.get('target_house_first'):
        member_ids.extend(get_senators(legislators, district))
        
    return member_ids