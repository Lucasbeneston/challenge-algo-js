/*
Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Examples : 
  bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
  bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
*/

function bouncer(arr) {
  return arr.filter((elem) => Boolean(elem));
}

console.log(bouncer([7, "ate", "", false, 9]));
