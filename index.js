var PowerPanelStatus;

PowerPanelStatus = class PowerPanelStatus {
  constructor(options) {
    this.base_url = options.base_url;
    this.user_name = options.user_name;
    this.password = options.password;
  }

  fetch(successCallback, errorCallback) {
    var cookieJar, request, signInOptions, statusOptions;
    request = require("request");
    cookieJar = request.jar();
    signInOptions = {
      method: "POST",
      uri: `${this.base_url}/local/rest/v1/login/verify`,
      jar: cookieJar,
      json: {
        userName: this.user_name,
        password: this.password
      }
    };
    statusOptions = {
      method: "GET",
      uri: `${this.base_url}/local/rest/v1/ups/status`,
      jar: cookieJar
    };
    return request(signInOptions, function(error, response, body) {
      statusOptions["auth"] = {
        bearer: body
      };
      return request(statusOptions, function(error, response, statusBody) {
        var statusObject;
        if (error != null) {
          if (errorCallback != null) {
            return errorCallback(error);
          } else {
            console.log("ERROR");
            return console.log(error);
          }
        } else {
          statusObject = JSON.parse(statusBody);
          if (successCallback != null) {
            return successCallback(statusObject);
          } else {
            console.log("Success");
            return console.log(JSON.stringify(statusObject, null, 2));
          }
        }
      });
    });
  }

};

module.exports = PowerPanelStatus;
