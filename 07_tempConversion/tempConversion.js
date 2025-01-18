const convertToCelsius = function(farenheitNum) {
  return Math.round(((farenheitNum-32)*5/9)*10)/10;
};

const convertToFahrenheit = function(celsiusNumber) {
  return Math.round((((celsiusNumber*9)/5)+32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
