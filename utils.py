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