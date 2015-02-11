"use strict"; 
function calc() {

  var finalTemperature;
  var tempTemperature = original.value;
  var expression = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var m = tempTemperature.match(expression);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      finalTemperature = (num * 9/5)+32;
      finalTemperature = finalTemperature.toFixed(1)+" Farenheit"
    }
    else {
      finalTemperature = (num - 32)*5/9;
      finalTemperature = finalTemperature.toFixed(1)+" Celsius"
    }
    converted.innerHTML = finalTemperature;
  }
  else {
    converted.innerHTML = "Failure in conversion";
  }
}
