/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

Examples : 
  confirmEnding("Congratulation", "on") should return true.
  confirmEnding("Connor", "n") should return false.
*/

function confirmEnding(string, target) {
  return string.endsWith(target);
}
console.log(confirmEnding("Bastian", "yn"));
