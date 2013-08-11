from flask import Flask, request, jsonify, url_for, redirect
import twilio.twiml
import requests
import pandas as pd
import json

app = Flask(__name__)
# load the production config, overwritten at bottom with dev config
# if called using python server.py
app.config.from_object('config.ConfigProduction')

call_methods = ['POST']

# load data - could replace with a database
def load_data():
    campaigns = pd.io.json.read_json('data/campaigns.json').set_index('id')
    with open('data/congress.json', 'r') as f:
        # TODO - get senators as well as house members into file
        congress = pd.DataFrame(
            [vote['details'] for vote in json.load(f)['votes']]
        ).set_index('bioguide_id')
    return campaigns, congress

campaigns, congress = load_data()


def locate_member_ids(zipcode, campaign=None):
    '''get congressional member ids from sunlight labs location api'''
    req = requests.get(
        'https://congress.api.sunlightfoundation.com/legislators/locate', 
        params=dict(apikey=app.config['SUNLIGHTLABS_KEY'], zip=zipcode))
    
    members = pd.DataFrame(req.json()['results'])

    # filter list by campaign target_house, target_senate
    targets = ['house', 'senate']
    if campaign is not None:
        if not campaign.get('target_house', True):
            targets.pop(0)
        if not campaign.get('target_senate', True):
            targets.pop()
        
    members = members[ members.chamber.isin(targets) ]
    return members.bioguide_id.tolist()
    
def get_campaign(cid):
    try:
        campaign = campaigns.ix[cid]
    except KeyError:
        campaign = campaigns.ix['default']
    return campaign

    
def parse_params(request):
    params = dict(
        user_phone_number=request.values.get('user_phone_number'),
        campaignId=request.values.get('campaignId', 'default'),
        zipcode=request.values.get('zipcode', None),
        repIds=request.values.get('repIds', None),
    )
            
    # lookup campaign by ID
    campaign = get_campaign(params['campaignId'])
    # set twilio phone number based on campaign id
    if app.config['DEBUG']:
        params['twilio_number'] = app.config['TW_NUMBER']
    else:
        params['twilio_number'] = campaign['number']
        # app.config['TW_CLIENT'].phone_numbers.get(campaign['sid']).phone_number
    
    # get representative's id by zip code
    if (params['zipcode'] is not None) and (params['repIds'] is None):
        params['repIds'] = locate_member_ids(params['zipcode'], campaign)
        
    return params

    
@app.route('/create', methods=call_methods)
def create_call():
    '''
    Makes a phone call to a user.
    Required Params:
        user_phone_number
        campaignId
    Optional Params:
        zipcode
        repIds
    '''
    # parse the info needed to make the call
    params = parse_params(request)
    
    # initiate the call
    if app.debug:
        print('running in dev mode. this call will NOT actually be made.')
    call = app.config['TW_CLIENT'].calls.create(
        to=params['user_phone_number'], 
        from_=params['twilio_phone_number'],
        url=url_for("connection", **params)
        )
    
    result = jsonify(message=call.status, debugMode=app.debug)
    result.status_code = 200 if call.status != 'failed' else 500
    return result

@app.route('/connection', methods=call_methods)
def connection():
    """
    Call handler to connect a user with their congress person(s).
    Required Params:
        campaignId
    Optional Params:
        repIds (if not present - go to incoming_call flow and asked for zipcode)
    """
    params = parse_params(request)
    if params['repIds'] is None:
        return _incoming_call_handler(params['campaignId'])
    elif isinstance(params['repIds'], basestring):
        # we are expecting a list of rep ids, not just one
        params['repIds'] = [params['repIds']]
    
    resp = twilio.twiml.Response()
    custom_msg_url = get_campaign(params['campaignId']).get(
        'recorded_message_url','')
    if custom_msg_url:
        resp.play(custom_msg_url)
    else:
        resp.say('Please wait a moment while we connect you with your congress person.')

    for cid, member in congress.ix[params['repIds']].iterrows():
        resp.say('Now dialing {} {}.'.format(
            member['first_name'], member['last_name']))
        resp.dial(
            member['phone'], 
            timeLimit=app.config['TW_TIME_LIMIT'],
            timeout=app.config['TW_TIMEOUT'],
            # callerId= [default is to show the user's number]
            # could also show the twilio number, if desired 
            # action=  TODO - success/failure handlers
            # twilio.com/docs/api/twiml/dial#examples-2
            )
        
    # TODO - thank you for calling message
    return str(resp)


@app.route('/incoming_call', methods=['POST'])
def incoming_call():
    """
    Handles incoming calls to the twilio numbers. 
    Required Params: campaignId
    
    Each Twilio phone number needs to be configured to point to:
    server.com/incoming_call?campaignId=12345
    from twilio.com/user/account/phone-numbers/incoming
    """
    return _incoming_call_handler(request.values.get('campaignId'))

def _incoming_call_handler(campaignId):
    resp = twilio.twiml.Response() 
    resp.say("Hi. Welcome to call congress.")
    with resp.gather(
        numDigits=5, 
        action=url_for("zip_parse", campaignId=campaignId), 
        method="POST") as g:
        g.say("Please enter your zip code, so we can lookup your Congress person.")
    return str(resp)


@app.route("/zip_parse", methods=call_methods)
def zip_parse():
    """
    Handle a zip code entered by the user.
    Required Params: campaignId
    """
    zipcode = request.values.get('Digits', None)
    campaignId = request.values.get('campaignId')
    redirect(url_for('connection', 
        repIds=locate_member_ids(zipcode, campaign=get_campaign(campaignId)), 
        campaignId=campaignId,
        _method='POST'))


if __name__ == "__main__":
    # load the debugger config
    app.config.from_object('config.Config')
    app.run()