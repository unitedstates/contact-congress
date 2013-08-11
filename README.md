Call Congress
==============

A simple flask server that connects calls between citizens and their congress person using the Twilio API.

The app uses environment variables to store account keys. For development you will need to set:

* SUNLIGHTLABS_KEY
* TWILIO_DEV_ACCOUNT_SID
* TWILIO_DEV_AUTH_TOKEN
* TW_NUMBER

and for production:
* SUNLIGHTLABS_KEY
* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN

To install locally and run in debug mode use:
    
    virtualenv venv
    source venv/bin/activate
    pip install -r requirements.txt
    
    ngrok -subdomain="1cf55a5a" 5000
    python server.py
  
To run in production:
  
    # create ENV variables for TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_NUMBER
    # these will charge real $ and connect real calls
    foreman start


The server *currently* has just one main call, with the form:
  
    /create?citizenNumber=12345601234&congressNumber=12345601234
  

Future 
--------

We have talked about testing a few different UX strategies:

* Know zipcode, enter phone number, connect them (**implemented**)
* Enter phone number first, twilio robot asks them punch in zipcode, connects them
* incoming call to phone number