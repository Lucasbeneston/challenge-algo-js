/* 
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.

Examples : 
  truncateString("A-tisket a-tasket A green and yellow basket", 8) should return the string A-tisket...
  truncateString("Absolutely Longer", 2) should return the string Ab....
*/

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
