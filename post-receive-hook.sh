#!/bin/sh
GIT_WORK_TREE=/root/call-congress git checkout -f
cd /root/call-congress
# install requirments
pip install -r requirements.txt
# kill old app
pkill gunicorn &
# start app
gunicorn -b 0.0.0.0:80 app:app --log-file='prod-error.log' --access-logfile='prod-access.log' &
