Call Congress
==============

A simple flask server that connects calls between citizens and their congress person using the Twilio API. 


The server handles two cases:

* A phone call made to the campaign number  
* A web-initiated call to connect a user's phone number to congress
    * can specify congress person(s) in the api call
    * can have the user punch in their zip code and look them up

### Incoming phone calls
Each new campaign's Twilio phone number needs to be [configured](http://twilio.com/user/account/phone-numbers/incoming) to point to:
    
    /incoming_call?campaignId=abc-1234

The user will be prompted to punch in their zip code, the server will locate their members of congress using the [Sunlight Labs locate API](http://sunlightlabs.github.io/congress/legislators.html#methods/legislators-locate), and dial them.

### Web-initiated connection calls
These calls are made from a web form where the user enters their phone number to be connected to Congress (will be prompted for zip code):

    /create?campaignId=abc-123&user_phone_number=1234567890

or a specific member of congress:
    
    /create?campaignId=abc-123&user_phone_number=1234567890&repIds=P000197

or to member(s) based on zip code:

    /create?campaignId=abc-123&user_phone_number=1234567890&zipcode=98102

Required Params:

* **user_phone_number**
* **campaignId**

Optional Params: *(either or)*

* **zipcode**
* **repIds**: identifiers (can be more than one) from the Sunlight API's [**bioguide_id**](http://sunlightlabs.github.io/congress/legislators.html#fields/identifiers) field
    

Campaign Configuration
----------------------
Currently stored in ``/data/campaigns.json``, each campaign has the fields:

* **id**
* **number** (Twilio phone number)
* **target_house** include house members in lookups by location
* **target_senate** include senators in lookups by location
* **recorded_message_url** url for recorded message to play to introduce call (if blank have default message read by robot)

Account Keys
------------

The app uses environment variables to store account keys. For development you will need to set:

* SUNLIGHTLABS_KEY
* TWILIO_DEV_ACCOUNT_SID
* TWILIO_DEV_AUTH_TOKEN
* TW_NUMBER

and for production:

* SUNLIGHTLABS_KEY
* TWILIO_ACCOUNT_SID
* TWILIO_AUTH_TOKEN

Development mode
-------------------
To install locally and run in debug mode use:

    # create ENV variables
    virtualenv venv
    source venv/bin/activate
    pip install -r requirements.txt
    
    python server.py
    # for testing twilio, need internet-visible urls to do call handling
    ngrok -subdomain="1cf55a5a" 5000 

Unit tests can be run using:

    python test_server.py

Production server
------------------
To run in production:
  
    # create ENV variables
    # these will charge real $ and connect real calls
    foreman start