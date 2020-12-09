PowerPanelStatus = require "./index.js"


# If you have PowerPanel Business 4.x installed, these would be the default 
# connection URL and credentials.

options = {
  base_url: "http://localhost:3052"
  user_name: "admin"
  password: "admin"
}

status = new PowerPanelStatus options

scb = (response)->
  console.log "Success!"
  console.log response

ecb = (err)->
  console.error "Error!"
  console.log err

status.fetch scb, ecb