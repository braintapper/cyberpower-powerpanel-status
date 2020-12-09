# cyberpower-powerpanel-status

Get the status from a Cyberpower USB connected UPS. Requires Cyberpower Powerpanel Business 4.x or higher.

Tested only on Windows.

# Overview

If you want to log the stats of your USB connected Cyberpower on Windows, it's not that straightforward. If you install the Cyberpower Powerpanel Business (instead of Personal) the software is a web app server that uses a REST API. 

This little lib logs into the Powerpanel Business web server, makes a request for the current status and returns a JSON object.

From there, you can post it into a database or whatever you want to do with it.


# Install

npm install cyberpower-powerpanel-status


# Sample Usage

```
var PowerPanelStatus, ecb, options, scb, status;

PowerPanelStatus = require("cyberpower-powerpanel-status");

// If you have PowerPanel Business 4.x installed, this would be the default 
// connection URL and credentials. Change this to reflect your own setup.
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

```

Sample Output:

```
{
  communicationAvaiable: true,
  deviceId: 0,
  onlyPhaseArch: false,       
  input: {
    state: 0,
    stateText: 'Normal',      
    voltages: [ '120.0 V' ],  
    currents: null,
    frequencies: null,        
    powerFactors: null,       
    available: true
  },
  output: {
    state: 0,
    stateText: 'Normal',      
    outlet1: null,
    outlet2: null,
    voltages: [ '120.0 V' ],  
    currents: null,
    frequencies: null,
    powerFactors: null,
    loads: [ '25 %' ],
    watts: [],
    vas: [],
    activePowers: null,
    apparentPowers: null,
    reactivePowers: null,
    available: true
  },
  battery: {
    state: 0,
    stateText: 'Normal, Fully Charged',
    voltage: '13.1 V',
    capacity: '100 %',
    remainingRunTimeInSecs: 1335,
    remainingRunTimeFormated: '0hr. 22min.',
    remainingRuntimeInsufficient: false,
    modularUpsRuntimeZero: false,
    chargeTimeInSecs: null,
    chargeTimeFormated: null,
    temperatureCelsius: null,
    highVoltage: null,
    lowVoltage: null,
    highCurrent: null,
    lowCurrent: null,
    available: true
  },
  bypass: {
    available: false,
    state: null,
    stateText: null,
    voltages: null,
    currents: null,
    frequencies: null,
    powerFactors: null
  },
  system: {
    state: null,
    stateText: null,
    maintenanceBreak: null,
    temperatureFormated: null,
    temperatureCelsius: null,
    temperatureFahrenheit: null,
    originalHardwareFaultCode: null,
    modules: null,
    available: false
  }
}
```