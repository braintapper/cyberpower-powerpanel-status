class PowerPanelStatus


  constructor: (options)->
    @base_url = options.base_url
    @user_name = options.user_name
    @password = options.password

  fetch: (successCallback, errorCallback)->
    request = require("request")


    cookieJar = request.jar()
    signInOptions = 
      method: "POST"
      uri: "#{@base_url}/local/rest/v1/login/verify"
      jar: cookieJar
      json:
        userName: @user_name
        password: @password
    statusOptions = 
      method: "GET"
      uri: "#{@base_url}/local/rest/v1/ups/status"
      jar: cookieJar

    request signInOptions, (error, response, body) ->
      statusOptions["auth"] = { bearer: body }
      request statusOptions, (error, response, statusBody) ->
        if error?
          if errorCallback?
            errorCallback error
          else
            console.log "ERROR"
            console.log error            

        else
          statusObject = JSON.parse(statusBody)
          if successCallback?
            successCallback statusObject
          else 
            console.log "Success"
            console.log JSON.stringify(statusObject, null, 2)



module.exports = PowerPanelStatus