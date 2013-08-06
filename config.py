import os
import twilio.rest

class Config(object):
    DEBUG = True
    APPLICATION_ROOT = 'http://1cf55a5a.ngrok.com'
    TW_CLIENT = twilio.rest.TwilioRestClient(
        'AC5f8610b3d3701d66a718dcd0ff04fb5d', 
        '89e3c3388dc2c428a38758faa88449b4',
        )
    TW_NUMBER = '5005550006'
    # limit on the length of the call
    TW_TIME_LIMIT = 60 * 4 #sec/min * min
    # limit on the amount of time to ring before giving up
    TW_TIMEOUT = 20 #sec
    
class ConfigProduction(Config):
    APPLICATION_ROOT = 'http://call.taskforce.is'
    TW_CLIENT = twilio.rest.TwilioRestClient(
        os.environ.get('TWILIO_ACCOUNT_SID'), 
        os.environ.get('TWILIO_AUTH_TOKEN'))
    TW_NUMBER = os.environ.get('TWILIO_NUMBER')
    