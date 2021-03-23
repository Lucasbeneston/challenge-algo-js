/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Examples : 
  spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
  spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
  spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/

function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return str.toLowerCase().split(regex).join("-");
}

console.log(spinalCase("The_Andy_Griffith_Show"));
