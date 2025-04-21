function getConfiguration(config)
{
  // This function allows you to indicate general configuration values
  // for all devices of this model.

  // Depending on the meaning of the "device address" in this device, 
  // you may want to change the label that is used to refer to the 
  // address in the user interface.
  // For instance, if the address of the device is actually a MAC 
  // address, you may want to use the code below.
  
  config.addressLabel = {en: "DevEUI", es: "DevEUI"};
}

function getEndpoints(deviceAddress, endpoints)
{
  var total_hours = endpoints.addEndpoint("1", " Total Hours ", endpointType.genericSensor);
        total_hours.variableTypeId = 1181;

  var state = endpoints.addEndpoint("2", "Line State", endpointType.genericSensor);
        state.variableTypeId = 1183;

  var productive_hours= endpoints.addEndpoint("3", " Productive hours ", endpointType.genericSensor);
        productive_hours.variableTypeId = 1181;

  var downtime = endpoints.addEndpoint("4", " Downtime ", endpointType.genericSensor);
        downtime.variableTypeId = 1181;

  var availability = endpoints.addEndpoint("5", " Availability ", endpointType.genericSensor);
        availability.variableTypeId = 1182;

  var produced_theorical = endpoints.addEndpoint("6", " Produced Theorical ", endpointType.genericSensor);
        produced_theorical.variableTypeId = 1180;

  var produced_real = endpoints.addEndpoint("7", "Produced real", endpointType.genericSensor);
        produced_real.variableTypeId = 1180;

  var performance = endpoints.addEndpoint("8", "Performance ", endpointType.genericSensor);
        performance.variableTypeId = 1182;

  var fault = endpoints.addEndpoint("9", "Faulty units", endpointType.genericSensor);
        fault.variableTypeId = 1180;

  var ok = endpoints.addEndpoint("10", " Production accepted", endpointType.genericSensor);
        ok.variableTypeId = 1180;

  var quality = endpoints.addEndpoint("11", "Quality ", endpointType.genericSensor);
        quality.variableTypeId = 1182;

  var oee = endpoints.addEndpoint("12", "OEE ", endpointType.genericSensor);
        oee.variableTypeId = 1182;

  var status = endpoints.addEndpoint("13", "Status", endpointType.genericSensor);
        status.variableTypeId = 1378;

}


function validateDeviceAddress(address, result)
{
  // This function allows you to validate the address of a device, when
  // the user is creating it. If your device has special validation rules
  // for the address, you can check them here, and return an error message
  // in case the address format is incorrect.

  // In the code below, a validation is made to ensure that the address 
  // is exactly 10 characters long.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // This function allows you to specify UI rules at the device level.
  // For instance, you can make it possible to enable or disable adding
  // endpoints manually to the device after it was created.
  
  // In the code below, adding endpoints manually is disabled in the
  // user interface. This means that the device will be limited to the 
  // endpoints defined by function getEndpoints() above.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // This function allows you to specify UI rules at the endpoint level.
  // For instance, you can make it possible to delete certain endpoints, 
  // or edit their endpoint subtype, if applicable.

  // In the code below, the following rules are defined:
  // - Endpoints cannot be deleted.
  // - The endpoint subtype can be changed, but only for the second 
  //   endpoint.
  
  rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}
