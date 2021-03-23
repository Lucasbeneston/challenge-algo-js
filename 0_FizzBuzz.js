/* 
Any number divisible by 3 is replaced by the word FIZZ and any number divisible by 5 by the word BUZZ.
Numbers divisible by 15 become FIZZBUZZ. 

Example : 1 2 FIZZ 4 BUZZ FIZZ 7 8 FIZZ BUZZ 11 FIZZ 13 14 FIZZBUZZ ...
*/

// FOR LOOP
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}

// FOR LOOP 2
for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 == 0) {
    output += "Fizz";
  }
  if (i % 5 == 0) {
    output += "Buzz";
  }
  if (output == "") {
    output = i;
  }
  console.log(output);
}

// FOR LOOP 3 TERNARY
for (let i = 1; i <= 100; i++) {
  console.log(i % 3 ? (i % 5 ? i : "Buzz") : i % 5 ? "Fizz" : "FizzBuzz");
}

// WHILE LOOP
let i = 0;
while (i <= 100) {
  i++;
  if (i % 15 === 0) {
    console.log("FIZZBUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }
}
