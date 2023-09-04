// Prompt:
// - Write a function called sumNumbers that accepts a single array of numbers
//  and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).
// Examples:
// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0

function sumNumbers(numArray) {
  if (numArray.length === 0) {
    return 0;
  } else {
    let sum = 0; // initialize accumulator variable
    for (let i = 0; i < numArray.length; i++) {
      sum += numArray[i]; // don't forget to actually add up the values in [i]
    }
    return sum;
  }
}

console.log(sumNumbers([1, 2, 3, 4]));
