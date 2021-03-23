/* 
Return the length of the longest word in the provided sentence.
Your response should be a number.

Examples: 
  findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
  findLongestWord("May the force be with you") should return 5.
*/

function findLongestWord(str) {
  let strSplit = str.split(" ");

  let longestWord = strSplit.sort((a, b) => b.length - a.length);

  return longestWord[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
