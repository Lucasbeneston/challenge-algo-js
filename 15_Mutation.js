/* 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

Examples : 
  mutation(["hello", "hey"]) should return false.
  mutation(["hello", "Hello"]) should return true.
*/

function mutation(arr) {
  let bool;

  let firstWord = arr[0].toLowerCase();
  let secondWord = arr[1].toLowerCase().split("");

  for (let i = 0; i < secondWord.length; i++) {
    if (firstWord.indexOf(secondWord[i]) == -1) {
      bool = false;
      return bool;
    } else {
      bool = true;
    }
  }

  return bool;
}

console.log(mutation(["hello", "hey"]));
