
function calc() {

  var finalTemperature;
  var tempTemperature = original.value;
  var expression = /([-+]?\d+(?:\.\d*)?)\s*([fFcC])/;

  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "aaaayy gurl, dont undestend ur tempp. gimme sum thing laik 3.4 C. aaaaaaaayyyyyyyyyyy";
  }
  
}
