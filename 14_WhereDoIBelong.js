/* 
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.

Examples : 
  getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
  getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
*/

function getIndexToIns(arr, num) {
  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length; i++) {
    if (num <= sortedArray[i]) return i;
  }
  return sortedArray.length;
}

console.log(getIndexToIns([40, 60, 30], 50));
