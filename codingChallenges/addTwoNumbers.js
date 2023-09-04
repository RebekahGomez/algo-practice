// Prompt:
// Write a function called addTwoNumbers that accepts two numeric arguments
// and returns the sum of those two numbers.
// If either argument is not a Number, return the value of NaN.
// Examples:
// addTwoNumbers(5, 10) //=> 15
// addTwoNumbers(10, -2) //=> 8
// addTwoNumbers(0, 0) //=> 0
// addTwoNumbers('Hello', 5) //=> NaN

// OPTION 1
function addTwoNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  } else {
    return num1 + num2;
  }
}

console.log(addTwoNumbers("three", "one"));

// OPTION 2 - COULD EASILY FLIP THE IF STATEMENT AROUND
function addTwoNumbers(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return NaN;
  }
}
