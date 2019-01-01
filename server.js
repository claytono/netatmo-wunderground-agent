var netatmoWunderground = require('netatmo-wunderground-pws')

//Set auth vars
var authInfo = {
    "netamo_client_id": "5c223c0eed287733108d98bb",
    "netamo_client_secret": "kaVVPDH7kmVK2pEDNnd2WHmsuJBZ",
    "netamo_username": "clayton@oneill.net",
    "netamo_password": "kWG6px%uvBZhMpXnsJ#UcCb7",
    "wundergroundStationId": "KVACENTR54",
    "wundergroundUserPassword": "qoL6GTy9"
  };

netatmoWundergroundUploader = new netatmoWunderground(authInfo);

//Send data on startup
netatmoWundergroundUploader.getNetatmoData();

//Refresh and upload data every 2.5 minutes
setInterval(function() {
    netatmoWundergroundUploader.getNetatmoData();
  }, 150000);