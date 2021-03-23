/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.

Examples : 
  repeatStringNumTimes("abc", 3) should return the string abcabcabc.
  repeatStringNumTimes("abc", -2) should return an empty string ("").
*/

function repeatStringNumTimes(string, times) {
  if (times > 0) return string.repeat(times);
  else return "";
}
console.log(repeatStringNumTimes("abc", 4));
