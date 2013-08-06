from flask import Flask, request, jsonify
import twilio.twiml

app = Flask(__name__)
# load the production config, overwritten at bottom with dev config
# if called using python server.py
app.config.from_object('config.ConfigProduction')

call_methods = ['GET', 'POST'] 
# could change to just post, when done testing

def site_url(path):
    return app.config['APPLICATION_ROOT'] + path

@app.route('/create', methods=call_methods)
def create_call():
    citizen_number = request.values.get('citizenNumber', None)
    congress_number = request.values.get('congressNumber', None)
    if app.debug:
        print('running in dev mode. this call will NOT actually be made.')
    # initiate the call
    call = app.config['TW_CLIENT'].calls.create(
        to=citizen_number, 
        from_=app.config['TW_NUMBER'],
        url=site_url("/calls/connection?congressNumber={}".format(congress_number)))
    
    result = jsonify(message=call.status, debugMode=app.debug)
    result.status_code = 200 if call.status != 'failed' else 500
    return result

@app.route('/connection', methods=call_methods)
def connection():
    congress_number = request.values.get('congressNumber', None)
    resp = twilio.twiml.Response()
    if congress_number:
        resp.say('Please wait a moment while we connect you with your congress person.')
        resp.dial(
            congress_number, 
            timeLimit=app.config['TW_TIME_LIMIT'],
            timeout=app.config['TW_TIMEOUT'],
            # callerId default is to show the citizenNumber 
            )
        # if busy or no one picks up
        resp.say("""
            Your congress person's phone was busy. 
            It must be ringing off the hook right now. 
            Please try again.
            """)
    else: 
        resp.say("""
            Sorry, we could't find your congress person's number.
            Please try again.
            """)
    return str(resp)


# Friendly handlers for dealing with errors and callbacks
def simple_message(msg):
    return str(twilio.twiml.Response().say(msg))
    

# set this message to play for incoming calls to the twilio number
# need to configure at:
# twilio.com/user/account/phone-numbers/incoming
@app.route('/incoming-call', methods=call_methods)
def incoming_call():
    return simple_message("""
        Hi, this is the Internet Task Force Hotline. 
        No-one is at the phones right now. Please visit:
        taskforce dot is.
        """)

if __name__ == "__main__":
    # load the debugger config
    app.config.from_object('config.Config')
    app.run()