Call Congress
==============

A simple flask server that connects calls between citizens and their congress person using the Twilio API.

The server handles two cases:

* A phone call made to the campaign number
* A web-initiated call to connect a user's phone number to congress
    * can specify congress person(s) in the api call
    * can have the user punch in their zip code and look up their congressional members

### Incoming phone calls
Each new campaign's Twilio phone number needs to be [configured](http://twilio.com/user/account/phone-numbers/incoming) to point to:

    /incoming_call?campaignId=abc-1234

The user will be prompted to punch in their zip code, the server will locate their members of congress using the [Sunlight Labs locate data](http://sunlightlabs.github.io/congress/index.html#bulk-data/zip-codes-to-congressional-districts), and dial them.

### Web-initiated connection calls
These calls are made from a web form where the user enters their phone number to be connected to Congress (will be prompted for zip code):

    /create?campaignId=abc-123&userPhone=1234567890

or a specific member of congress:

    /create?campaignId=abc-123&userPhone=1234567890&repIds=P000197

or to member(s) based on zip code:

    /create?campaignId=abc-123&userPhone=1234567890&zipcode=98102

Required Params:

* **userPhone**
* **campaignId**

Optional Params: *(either or)*

* **zipcode**
* **repIds**: identifiers (can be more than one) from the Sunlight API's [**bioguide_id**](http://sunlightlabs.github.io/congress/legislators.html#fields/identifiers) field


Campaign Configuration
----------------------
Currently stored in ``/data/campaigns.yaml``, each campaign has the following optional fields. Defaults are given by the ``default`` campaign.

* **id**
* **number** (Twilio phone number)
* **target_house** include house members in lookups by location
* **target_senate** include senators in lookups by location
* **target_house_first** allows the campaign to target house members before senate members (default: target senate first)
* **repIds** (optional) list of rep. IDs to target

Messages: Can be urls for recorded message to play or text for the robot to read. Text can be rendered as a mustache template. The following messages are the defaults and will be inherited by new campaigns unless overwritten.

* msg_intro: Hi. Welcome to call congress.
* msg_ask_zip: Please enter your zip code so we can lookup your Congress person.
* msg_invalid_zip: "Sorry, that zip code didn't work. Please try again."
* msg_call_block_intro: "We'll now connect you to {{n_reps}} representatives. Press # for next rep."
* msg_rep_intro: "We're now connecting you to {{name}}"
* msg_between_thanks: You're doing great - here's the next call.
* msg_final_thanks: Thank you!


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
* APPLICATION_ROOT (url for application server)
* TASKFORCE_KEY (used for querying statistics)

Development mode
-------------------
To install locally and run in debug mode use:

    # create ENV variables
    virtualenv venv
    source venv/bin/activate
    pip install -r requirements.txt

    python app.py
    # for testing twilio, need internet-visible urls to do call handling
    ngrok -subdomain="1cf55a5a" 5000

When the dev server is running, the demo front-end will be accessible at [http://localhost:5000/demo](http://localhost:5000/demo).

Unit tests can also be run, using:

    python test_server.py

Production server
------------------
To run in production:

    # create ENV variables
    # open correct port
    iptables -A INPUT -p tcp --dport 80 -j ACCEPT
    # initialize the database
    python models.py
    # run server - will charge real $ and connect real calls
    foreman start

Updating for changes in congress
--------------------------------
Just download the latest data from Sunlight Congress API using:

    cd data && make -B
    git commit data/districts.csv data/legislators.csv
