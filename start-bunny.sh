#!/bin/bash
#####################################################
#Setup API server enviornment
#####################################################
if [ -z "$API_HOME" ]; then
    export API_HOME=/var/www/BunnyAPI/backend
fi

export NODE_ENV=production
cd $API_HOME

#####################################################
#Startup Script Logging
#####################################################
NOW="$(date +%Y_%m%d_%H%M%S)"
exec 3>&1 4>&2
trap 'exec 2>&4 1>&3' 0 1 2 3
exec 1>$API_HOME/logs/startup/startup-$NOW.log 2>&1

#####################################################
#Start Services
#####################################################
#Start API Service
forever start --append -l $API_HOME/logs/API/API.log -o $API_HOME/logs/API/API.log -e $API_HOME/logs/API/API.error.log -v $API_HOME/bin/www.js

#Sleep for 5 seconds to ensure the API is running
sleep 5s

forever list >&3
echo "Log file located at: $API_HOME/logs/startup/startup-$NOW.log" >&3
