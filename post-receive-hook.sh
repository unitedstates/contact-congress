#!/bin/sh
GIT_WORK_TREE=/root/call-congress git checkout -f
cd /root/call-congress
cp /root/valid_user_emails.txt data/users.txt
# install requirments
pip install -r requirements.txt
# kill old app
pkill gunicorn &
# start app
gunicorn -b 0.0.0.0:80 app:app --log-file='prod-error.log' --access-logfile='prod-access.log' &
