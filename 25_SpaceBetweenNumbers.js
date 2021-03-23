/* 
Add spaces every 3 units of a number.

Examples : 
  numberSpace(1000000000) should return "1 000 000 000"
  numberSpace(1234567) should return "1 234 567"
*/

function numberSpace(currentNumber) {
  const numberUnity = currentNumber.toString().split("").reverse();

  let newNumber = [];

  for (let i = numberUnity.length - 1; i >= 0; i--) {
    if (i > 0 && i % 3 === 0) {
      newNumber += numberUnity[i] + " ";
    } else {
      newNumber += numberUnity[i];
    }
  }
  return newNumber;
}

console.log(numberSpace(1000000000));
