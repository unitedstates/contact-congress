from flask import Flask, request, jsonify, url_for, render_template
import twilio.twiml
from twilio import TwilioRestException
from utils import load_data, set_trace
from models import log_call
from utils import get_database, play_or_say, locate_member_ids

app = Flask(__name__)
app.config.from_object('config.ConfigProduction')
db = get_database(app)

call_methods = ['GET', 'POST']

campaigns, legislators, districts = load_data()
defaults_campaign = campaigns['default']

def get_campaign(cid):
    return dict(defaults_campaign, **campaigns[cid])

def parse_params(request):
    params = dict(
        userPhone=request.values.get('userPhone'),
        campaignId=request.values.get('campaignId', 'default'),
        zipcode=request.values.get('zipcode', None),
        repIds=request.values.get('repIds', None),
    )
            
    # lookup campaign by ID
    campaign = get_campaign(params['campaignId'])
    
    # set twilio phone number based on campaign id
    params['twilio_number'] = campaign.pop('number')
    if app.config['DEBUG']:
        params['twilio_number'] = app.config['TW_NUMBER']

    # add repIds to the parameter set
    if campaign.get('repIds', None):
        params['repIds'] = campaign['repIds']
        
    # get representative's id by zip code
    if (params['zipcode'] is not None) and (params['repIds'] is None):
        params['repIds'] = locate_member_ids(
            params['zipcode'], campaign, districts, legislators)
    return params, campaign


def intro_zip_gather(campaignId):
    resp = twilio.twiml.Response()
    campaign = get_campaign(campaignId)
    play_or_say(resp, campaign['msg_intro'])
    return zip_gather(resp, campaign)

def zip_gather(resp, campaign):
    with resp.gather(numDigits=5, method="POST",
        action=url_for("zip_parse", campaignId=campaign['id'])) as g:
        play_or_say(g, campaign['msg_ask_zip'])
    return str(resp)
    
    
def make_calls(params):
    """
    Connect a user to a sequence of congress members.
    Required params: campaignId, repIds
    Optional params: zipcode,
    """
    resp = twilio.twiml.Response()
    campaign = get_campaign(params['campaignId'])
    play_or_say(resp, campaign['msg_call_block_intro'], 
        n_reps=len(params['repIds']))
    
    for mid, member in legislators.ix[params['repIds']].iterrows():
        play_or_say(resp, campaign['msg_rep_intro'], 
            name="{} {}".format(member['firstname'], member['lastname']))
        params['member_id'] = mid
        resp.dial(
            member['phone'], 
            timeLimit=app.config['TW_TIME_LIMIT'],
            timeout=app.config['TW_TIMEOUT'],
            # callerId= [default is to show the user's number] / alt. twilio #
            action=url_for('call_complete', **params) # on complete
            )

    # thank you for calling message
    play_or_say(resp, campaign['msg_final_thanks'])
    return str(resp)


@app.route('/create', methods=call_methods)
def call_user():
    '''
    Makes a phone call to a user.
    Required Params:
        userPhone
        campaignId
    Optional Params:
        zipcode
        repIds
    '''
    # parse the info needed to make the call
    params, campaign = parse_params(request)
    
    # initiate the call
    if app.debug:
        print('running in dev mode. this call will NOT actually be made.')
        
    try:
        call = app.config['TW_CLIENT'].calls.create(
            to=params['userPhone'], 
            from_=params['twilio_number'],
            url=app.config['APPLICATION_ROOT'] + url_for("connection", **params)
            # use absolute url (twilio requires an internet visible url for call handling)
            )
        result = jsonify(message=call.status, debugMode=app.debug)
        result.status_code = 200 if call.status != 'failed' else 500
    except TwilioRestException, err:
        result = jsonify(message=err.msg.split(':')[1].strip())
        result.status_code = 400
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
    params, campaign = parse_params(request)
    if params['repIds'] is None:
        return intro_zip_gather(params['campaignId'])
    elif isinstance(params['repIds'], basestring):
        # we are expecting a list of rep ids, not just one
        params['repIds'] = [params['repIds']]
    return make_calls(params)


@app.route('/incoming_call', methods=['POST'])
def incoming_call():
    """
    Handles incoming calls to the twilio numbers. 
    Required Params: campaignId
    
    Each Twilio phone number needs to be configured to point to:
    server.com/incoming_call?campaignId=12345
    from twilio.com/user/account/phone-numbers/incoming
    """
    return intro_zip_gather(request.values.get('campaignId'))


@app.route("/zip_parse", methods=call_methods)
def zip_parse():
    """
    Handle a zip code entered by the user.
    Required Params: campaignId, Digits
    """
    campaign = get_campaign(request.values.get('campaignId'))
    zipcode = request.values.get('Digits', None)
    
    if len(zipcode) != 5:
        resp = twilio.twiml.Response()
        play_or_say(resp, campaign['msg_invalid_zip'])
        return zip_gather(resp, campaign)    
    
    return make_calls(params=dict(
        campaignId=campaign['id'],
        zipcode=zipcode,
        repIds=locate_member_ids(zipcode, campaign, districts, legislators), 
        ))

@app.route('/call_complete', methods=call_methods)
def call_complete():
    params, campaign = parse_params(request)
    member_id = request.get('member_id')
    status = request.get('DialCallStatus')
    
    resp = twilio.twiml.Response()
    play_or_say(resp, campaign['msg_between_thanks'])
    
    log_call(db, 
        campaign_id=campaign['id'],
        zipcode=params['zipcode'], 
        phone_number=params['userPhone'],
        member_id=member_id,
        status=status)
    return str(resp)

@app.route('/demo')
def demo():
    return render_template('demo.html')
    
    
if __name__ == "__main__":
    # load the debugger config
    app.config.from_object('config.Config')
    app.run(host='0.0.0.0')