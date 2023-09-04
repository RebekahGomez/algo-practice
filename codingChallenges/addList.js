// Prompt:
// - Write a function called addList that accepts any quantity of numbers as arguments,
// adds them together and returns the resulting sum.
// - Assume all parameters will be numbers.
// - If called with no arguments, return 0 (zero).
// Examples:
// add(1) //=> 1
// add(1, 50, 1.23) //=> 52.23
// add(7, -12) //=> -5

function addList(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(addList(1, 2, 3));

// NOTE: when you use the rest parameter (...nums), JavaScript automatically gathers the arguments
// passed to the function into an array named "nums" even though we didn't explicitely pass an array when
// we called the function.
