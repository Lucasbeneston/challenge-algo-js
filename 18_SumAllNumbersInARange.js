/* 
We'll pass you an array of two numbers.
Return the sum of those two numbers plus the sum of all the numbers between them.
The lowest number will not always come first.

Examples : 
  sumAll([1, 4]) should return 10.
  sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
  let sumBetween = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sumBetween += i;
  }
  return sumBetween;
}

console.log(sumAll([1, 10]));
