/* 
Display "true" if the two words are anagrams, "false" otherwise.

Examples : 
  checkAnagram("tuTu", "Utut") should return "true"
  checkAnagram("Lola", "Lucas") should return "false"
*/

function checkAnagram(firstWord, secondWord) {
  first = firstWord.toLowerCase().split("").sort().join("");
  second = secondWord.toLowerCase().split("").sort().join("");

  if (first === second) {
    return true;
  } else {
    return false;
  }
}

console.log(checkAnagram("tuTu", "Utut"));
