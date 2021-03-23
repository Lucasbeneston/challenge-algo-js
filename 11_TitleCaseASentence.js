/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.

Examples : 
  titleCase("I'm a little tea pot") should return a string.
  titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
*/

function titleCase(str) {
  const spliteString = str.split(" ");

  const spliteStringArray = spliteString.map(
    (name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  );
  return spliteStringArray.join(" ");
}

console.log(titleCase("sHoRt AnD sToUt"));
