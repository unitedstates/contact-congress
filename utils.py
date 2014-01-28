import pystache
import twilio.twiml

from flask.ext.sqlalchemy import SQLAlchemy


def get_database(app):
    return SQLAlchemy(app)


def play_or_say(resp_or_gather, msg_template, **kwds):
    # take twilio response and play or say a mesage
    # can use mustache templates to render keword arguments
    msg = pystache.render(msg_template, kwds)

    if msg.startswith('http'):
        resp_or_gather.play(msg)
    elif msg:
        resp_or_gather.say(msg)
