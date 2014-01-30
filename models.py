import hashlib
import logging

from datetime import datetime
from flask.ext.sqlalchemy import SQLAlchemy
from sqlalchemy import func, Column, Integer, String, DateTime

db = SQLAlchemy()


def hash_phone(number):
    # takes phone number and returns 64 charachter string
    return hashlib.sha256(number).hexdigest()


def to_dict(model):
    d = model.__dict__
    d.pop('_sa_instance_state')

    return d


db.Model.to_dict = to_dict


class Call(db.Model):
    __tablename__ = 'calls'

    id = Column(Integer, primary_key=True)
    timestamp = Column(DateTime)
    campaign_id = Column(String(10))
    member_id = Column(String(10))  # congress member sunlight identifier

    # user attributes
    user_id = Column(String(64))    # hashed phone number
    zipcode = Column(String(5))
    areacode = Column(String(3))    # first 3 digits of phone number
    exchange = Column(String(3))    # next 3 digits of phone number

    # twilio attributes
    call_id = Column(String(40))    # twilio call ID
    status = Column(String(25))     # twilio call status
    duration = Column(Integer)      # twilio call time in seconds

    def __init__(self, campaign_id, member_id, zipcode=None, phone_number=None,
                 call_id=None, status='unknown', duration=0):
        self.timestamp = datetime.now()
        self.status = status
        self.duration = duration
        self.campaign_id = campaign_id
        self.member_id = member_id
        self.call_id = call_id

        if phone_number:
            phone_number = phone_number.replace('-', '').replace('.', '')
            self.user_id = hash_phone(phone_number)
            self.areacode = phone_number[:3]
            self.exchange = phone_number[3:6]

        self.zipcode = zipcode

    def __repr__(self):
        return '<Call {}-{}-xxxx to {}>'.format(
            self.areacode, self.exchange, self.member_id)


def log_call(db, params, campaign, request):
    try:
        i = int(request.values.get('call_index'))

        kwds = dict(
            campaign_id=campaign['id'],
            member_id=params['repIds'][i],
            zipcode=params['zipcode'],
            phone_number=params['userPhone'],
            call_id=request.values.get('CallSid', None),  # twilio call id
            status=request.values.get('DialCallStatus', 'unknown'),
            duration=request.values.get('DialCallDuration', 0))

        db.session.add(Call(**kwds))
        db.session.commit()
    except:
        logging.error('Failed to log call: {}'.format(kwds))

def call_count(db):
    try:
        return dict(count=db.session.query(func.Count(Call.zipcode)))
    except:
        return 0

def aggregate_stats(cid):
    zipcodes = db.session.query(Call.zipcode, func.Count(Call.zipcode)) \
        .filter(Call.campaign_id == cid) \
        .group_by(Call.zipcode).all()

    reps = db.session.query(Call.member_id, func.Count(Call.member_id)) \
        .filter(Call.campaign_id == cid) \
        .group_by(Call.member_id).all()

    return dict(calls=dict(
        zipcodes=dict(tuple(z) for z in zipcodes),
        reps=dict(tuple(r) for r in reps)))


def setUp(app):
    db.app = app
    db.drop_all()
    db.create_all()


def tearDown(app):
    db.app = app
    db.drop_all()


if __name__ == "__main__":
    # initialize db
    from app import app
    setUp(app)
