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


def get_campaign(cid):
    return campaigns.ix[cid].to_dict()


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

    # add the campaign parameters to the parameter set
    params.update(campaign)
    
    # get representative's id by zip code
    if (params['zipcode'] is not None) and (params['repIds'] is None):
        params['repIds'] = locate_member_ids(
            params['zipcode'], campaign, districts, legislators)
    return params


def zip_gather(campaignId, msg="Hi. Welcome to call congress."):
    resp = twilio.twiml.Response() 
    resp.say(msg)
    with resp.gather(
        numDigits=5, 
        action=url_for("zip_parse", campaignId=campaignId), 
        method="POST") as g:
        g.say("Please enter your zip code, so we can lookup your Congress person.")
    return str(resp)
    
    
def make_calls(params):
    """
    Connect a user to a sequence of congress members.
    Required params: campaignId, repIds
    Optional params: zipcode,
    """
    resp = twilio.twiml.Response()
    campaign = get_campaign(params['campaignId'])
    into_msg = campaign.get(
        'recorded_message_url',
        'Please wait a moment while we connect you with your congress person.')
    play_or_say(resp, into_msg)
    
    for mid, member in legislators.ix[params['repIds']].iterrows():
        resp.say('Now dialing {} {}.'.format(
            member['firstname'], member['lastname']))
        params['member_id'] = mid
        resp.dial(
            member['phone'], 
            timeLimit=app.config['TW_TIME_LIMIT'],
            timeout=app.config['TW_TIMEOUT'],
            # callerId= [default is to show the user's number] / alt. twilio #
            action=url_for('call_complete', **params) # on complete
            )

    # TODO - thank you for calling message
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
    params = parse_params(request)
    
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
    params = parse_params(request)
    if params['repIds'] is None:
        return zip_gather(params['campaignId'])
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
    return zip_gather(request.values.get('campaignId'))


@app.route("/zip_parse", methods=call_methods)
def zip_parse():
    """
    Handle a zip code entered by the user.
    Required Params: campaignId, Digits
    """
    campaignId = request.values.get('campaignId')
    zipcode = request.values.get('Digits', None)
    
    if len(zipcode) != 5:
        return zip_gather(campaignId, msg='Zip codes must have 5 digits.')    
    
    return make_calls(params=dict(
        campaignId=campaignId,
        zipcode=zipcode,
        repIds=locate_member_ids(
            zipcode, get_campaign(campaignId),
            districts, legislators), 
        ))

@app.route('/call_complete', methods=call_methods)
def call_complete():
    params = parse_params(request)
    status = request.get('DialCallStatus')
    member_id = request.get('member_id')
    set_trace()
    
    log_call(db, 
        campaign_id=params['campaignId'],
        zipcode=params['zipcode'], 
        phone_number=params['userPhone'],
        member_id=member_id,
        status=status)


@app.route('/demo')
def demo():
    return render_template('demo.html')
    
    
if __name__ == "__main__":
    # load the debugger config
    app.config.from_object('config.Config')
    app.run(host='0.0.0.0')