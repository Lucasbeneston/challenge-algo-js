/* 
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
You are given a variable celsius representing a temperature in Celsius.

Examples : 
  convertToF(0) should return a number
  convertToF(-30) should return a value of -22
  convertToF(-10) should return a value of 14
*/

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertToF(30));
