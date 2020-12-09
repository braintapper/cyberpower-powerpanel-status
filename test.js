var PowerPanelStatus, ecb, options, scb, status;

PowerPanelStatus = require("./index.js");

// If you have PowerPanel Business 4.x installed, test would be the default 
// connection URL and credentials.
options = {
  base_url: "http://localhost:3052",
  user_name: "admin",
  password: "admin"
};

status = new PowerPanelStatus(options);

scb = function(response) {
  console.log("Success!");
  return console.log(response);
};

ecb = function(err) {
  console.error("Error!");
  return console.log(err);
};

status.fetch(scb, ecb);
