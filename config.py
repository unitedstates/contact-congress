import os

from distutils.util import strtobool

import twilio.rest


class Config(object):
    DEBUG = True

    APPLICATION_ROOT = 'http://1cf55a5a.ngrok.com'
    TW_CLIENT = twilio.rest.TwilioRestClient(
        os.environ.get('TWILIO_DEV_ACCOUNT_SID'),
        os.environ.get('TWILIO_DEV_AUTH_TOKEN'))

    TW_NUMBER = '5005550006' # development number
    SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'

    TASKFORCE_KEY = os.environ.get('TASKFORCE_KEY')
    SUNLIGHTLABS_KEY = os.environ.get('SUNLIGHTLABS_KEY')

    # limit on the length of the call
    TW_TIME_LIMIT = 60 * 4 # sec/min * min

    # limit on the amount of time to ring before giving up
    TW_TIMEOUT = 20 # sec

    SECRET_KEY = 'AOUSBDAONPSOMDASIDUBSDOUABER)*#(R&(&@@#))'

class ConfigProduction(Config):
    DEBUG = strtobool(os.environ.get('DEBUG', 'false'))

    APPLICATION_ROOT = os.environ.get('APPLICATION_ROOT')
    TW_CLIENT = twilio.rest.TwilioRestClient(
        os.environ.get('TWILIO_ACCOUNT_SID'),
        os.environ.get('TWILIO_AUTH_TOKEN'))
    TW_NUMBER = os.environ.get('TWILIO_NUMBER')
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URI')
    SECRET_KEY = os.environ.get('SECRET_KEY')

class ConfigTesting(Config):
    TESTING = True
    APPLICATION_ROOT = ''
    SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'
