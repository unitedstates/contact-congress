from flask import Flask, request, render_template, url_for
import random
import urlparse
import twilio.twiml
from twilio import TwilioRestException
from utils import load_data
from models import log_call, aggregate_stats
from utils import get_database, play_or_say, locate_member_ids
from flask.ext.jsonpify import jsonify

app = Flask(__name__)
app.config.from_object('config.ConfigProduction')

db = get_database(app)

call_methods = ['GET', 'POST']

campaigns, legislators, districts = load_data()
defaults_campaign = campaigns['default']


def full_url_for(route, **kwds):
    return urlparse.urljoin(app.config['APPLICATION_ROOT'],
        url_for(route, **kwds))


def get_campaign(cid):
    return dict(defaults_campaign, **campaigns[cid])


def parse_params(r):
    params = {
        'userPhone': r.values.get('userPhone'),
        'campaignId': r.values.get('campaignId', 'default'),
        'zipcode': r.values.get('zipcode', None),
        'repIds': r.values.getlist('repIds')
    }

    # lookup campaign by ID
    campaign = get_campaign(params['campaignId'])

    # add repIds to the parameter set, if spec. by the campaign
    if campaign.get('repIds', None):
        if isinstance(campaign['repIds'], basestring):
            params['repIds'] = [campaign['repIds']]
        else:
            params['repIds'] = campaign['repIds']

    # get representative's id by zip code
    if (params['zipcode'] is not None) and len(params['repIds']) == 0:
        params['repIds'] = locate_member_ids(
            params['zipcode'], campaign, districts, legislators)

    if 'random_choice' in campaign:
        # pick a random choice among a selected set of members
        params['repIds'] = [random.choice(campaign['random_choice'])]

    return params, campaign


def intro_zip_gather(params, campaign):
    resp = twilio.twiml.Response()

    play_or_say(resp, campaign['msg_intro'])

    return zip_gather(resp, params, campaign)


def zip_gather(resp, params, campaign):
    with resp.gather(numDigits=5, method="POST",
            action=url_for("zip_parse", **params)) as g:
        play_or_say(g, campaign['msg_ask_zip'])

    return str(resp)


def dialing_config(params):
    dc = dict(
        timeLimit=app.config['TW_TIME_LIMIT'],
        timeout=app.config['TW_TIMEOUT'],
        hangupOnStar=True, # allow the user to hangup and move onto next call
        action=url_for('call_complete', **params) # on complete
    )

    return dc


def make_calls(params, campaign):
    """
    Connect a user to a sequence of congress members.
    Required params: campaignId, repIds
    Optional params: zipcode,
    """
    resp = twilio.twiml.Response()

    n_reps = len(params['repIds'])

    play_or_say(resp, campaign['msg_call_block_intro'],
        n_reps=n_reps, many_reps=n_reps > 1)

    resp.redirect(url_for('make_single_call', call_index=0, **params))

    return str(resp)


@app.route('/make_calls', methods=call_methods)
def _make_calls():
    params, campaign = parse_params(request)

    return make_calls(params, campaign)


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
    try:
        call = app.config['TW_CLIENT'].calls.create(
            to=params['userPhone'],
            from_=campaign['number'],
            url=full_url_for("connection", **params),
            timeLimit=app.config['TW_TIME_LIMIT'],
            timeout=app.config['TW_TIMEOUT'],
            status_callback=full_url_for("call_complete_status", **params),
            )
        result = jsonify(message=call.status, debugMode=app.debug)
        result.status_code = 200 if call.status != 'failed' else 500
    except TwilioRestException, err:
        result = jsonify(message=err.msg.split(':')[1].strip())
        result.status_code = 200

    return result


@app.route('/connection', methods=call_methods)
def connection():
    """
    Call handler to connect a user with their congress person(s).
    Required Params:
        campaignId
    Optional Params:
        zipcode
        repIds (if not present - go to incoming_call flow and asked for zipcode)
    """
    params, campaign = parse_params(request)

    if params['repIds']:
        resp = twilio.twiml.Response()

        play_or_say(resp, campaign['msg_intro'])

        action = url_for("_make_calls", **params)

        with resp.gather(numDigits=1, method="POST", timeout=10,
                         action=action) as g:
            play_or_say(g, campaign['msg_intro_confirm'])

            return str(resp)
    else:
        return intro_zip_gather(params, campaign)


@app.route('/incoming_call', methods=call_methods)
def incoming_call():
    """
    Handles incoming calls to the twilio numbers.
    Required Params: campaignId

    Each Twilio phone number needs to be configured to point to:
    server.com/incoming_call?campaignId=12345
    from twilio.com/user/account/phone-numbers/incoming
    """
    params, campaign = parse_params(request)

    return intro_zip_gather(params, campaign)


@app.route("/zip_parse", methods=call_methods)
def zip_parse():
    """
    Handle a zip code entered by the user.
    Required Params: campaignId, Digits
    """
    params, campaign = parse_params(request)
    zipcode = request.values.get('Digits', "")
    repIds = locate_member_ids(zipcode, campaign, districts, legislators)

    if len(repIds) == 0:
        resp = twilio.twiml.Response()
        play_or_say(resp, campaign['msg_invalid_zip'])

        return zip_gather(resp, params, campaign)

    params['zipcode'] = zipcode
    params['repIds'] = repIds

    return make_calls(params, campaign)


@app.route('/make_single_call', methods=call_methods)
def make_single_call():
    params, campaign = parse_params(request)
    i = int(request.values.get('call_index', 0))
    params['call_index'] = i
    member = legislators.ix[params['repIds'][i]]
    congress_phone = member['phone']
    full_name = unicode("{} {}".format(
        member['firstname'], member['lastname']), 'utf8')

    resp = twilio.twiml.Response()

    if 'voted_with_list' in campaign and \
        (params['repIds'][i] in campaign['voted_with_list']):
        play_or_say(
            resp, campaign['msg_repo_intro_voted_with'], name=full_name)
    else:
        play_or_say(resp, campaign['msg_rep_intro'], name=full_name)

    resp.dial(congress_phone, **dialing_config(params))

    return str(resp)


@app.route('/call_complete', methods=call_methods)
def call_complete():
    params, campaign = parse_params(request)
    # TODO: Actually fix the database server
    #log_call(db, params, campaign, request)

    resp = twilio.twiml.Response()

    i = int(request.values.get('call_index', 0))

    if i == len(params['repIds']) - 1:
        # thank you for calling message
        play_or_say(resp, campaign['msg_final_thanks'])
    else:
        # call the next representative
        params['call_index'] = i + 1 # increment the call counter

        play_or_say(resp, campaign['msg_between_thanks'])

        resp.redirect(url_for('make_single_call', **params))

    return str(resp)


@app.route('call_complete_status', methods=call_methods)
def call_complete_callback():
    # asynch callback from twilio on call complete
    params, campaign = parse_params(request)
    return jsonify(dict(
        phoneNumber=request.values.get('To', ''),
        callStatus=request.values.get('CallStatus', 'unknown'),
        repIds=params['repIds'],
        campaignId=params['campaignId'],
        ))



@app.route('/demo')
def demo():
    return render_template('demo.html')


@app.route('/stats')
def stats():
    pwd = request.values.get('password', None)
    campaign = get_campaign(request.values.get('campaignId', 'default'))
    if pwd == app.config['SECRET_KEY']:
        return jsonify(aggregate_stats(campaign['id']))
    else:
        return jsonify(error="access denied")


if __name__ == "__main__":
    # load the debugger config
    app.config.from_object('config.Config')
    app.run(host='0.0.0.0')
