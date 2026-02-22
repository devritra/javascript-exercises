const convertToCelsius = function(temp_F) {
  let cValue = (temp_F - 32) * 5/9
  return Math.round(cValue * 10)/10; 
};

const convertToFahrenheit = function(temp_C) {
  let fValue = temp_C * 9/5 + 32;
  return Math.round(fValue * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
