/* 
Perform a search and replace on the sentence using the arguments provided and return the new sentence.
First argument is the sentence to perform the search and replace on.
Second argument is the word that you will be replacing (before).
Third argument is what you will be replacing the second argument with (after).
Note: Preserve the case of the first character in the original word when you are replacing it.

Examples : 
  myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return the string He is Sitting on the couch.
  myReplace("Let us go to the store", "store", "mall") should return the string Let us go to the mall.
*/

function myReplace(str, before, after) {
  var index = str.indexOf(before);

  if (str[index] === str[index].toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  str = str.replace(before, after);

  return str;
}

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
