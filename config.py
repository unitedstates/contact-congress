import os
import twilio.rest

class Config(object):
    DEBUG = True
    APPLICATION_ROOT = 'http://1cf55a5a.ngrok.com'
    TW_CLIENT = twilio.rest.TwilioRestClient(
        os.environ.get('TWILIO_DEV_ACCOUNT_SID'), 
        os.environ.get('TWILIO_DEV_AUTH_TOKEN'))
    TW_NUMBER = '5005550006' # development number
    
    # limit on the length of the call
    TW_TIME_LIMIT = 60 * 4 #sec/min * min
    # limit on the amount of time to ring before giving up
    TW_TIMEOUT = 20 #sec
    
class ConfigProduction(Config):
    DEBUG = False
    APPLICATION_ROOT = 'https://call.taskforce.is'
    TW_CLIENT = twilio.rest.TwilioRestClient(
        os.environ.get('TWILIO_ACCOUNT_SID'), 
        os.environ.get('TWILIO_AUTH_TOKEN'))
    TW_NUMBER = os.environ.get('TWILIO_NUMBER')
    