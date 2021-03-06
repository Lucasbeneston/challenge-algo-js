/* 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Examples : 
  chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
  chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
*/

function chunkArrayInGroups(arr, size) {
  let group = [];
  while (arr.length > 0) {
    group.push(arr.splice(0, size));
  }
  return group;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "s"], 2));
