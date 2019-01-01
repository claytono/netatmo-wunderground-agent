var netatmoWunderground = require('netatmo-wunderground-pws')

//Set auth vars
var authInfo = {
    "netamo_client_id": "NETATMO_CLIENT_ID",
    "netamo_client_secret": "NETATMO_CLIENT_SECRET",
    "netamo_username": "NETATMO_USERNAME",
    "netamo_password": "NETATMO_PASSWORD",
    "wundergroundStationId": "WUNDERGROUND_STATION_ID",
    "wundergroundUserPassword": "WUNDERGROUND_USER_PASSWORD"
  };

var config = {}
for (var attr in authInfo) {
    if (authInfo[attr] in process.env) {
      config[attr] = process.env[authInfo[attr]]
    } else {
      console.log("You must set the " + authInfo[attr] + " environment variable")
      return
    }
}

netatmoWundergroundUploader = new netatmoWunderground(config);

//Send data on startup
netatmoWundergroundUploader.getNetatmoData();

//Refresh and upload data every 2.5 minutes
setInterval(function() {
    netatmoWundergroundUploader.getNetatmoData();
  }, 150000);
