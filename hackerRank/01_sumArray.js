// PROMPT
// Given an array of integers, find the sum of its elements. Return an integer.
// EG: if the array arr = [1, 2, 3] return 6

function sumArray(arr) {
  let solution = 0;
  for (let i = 0; i < arr.length; i++) {
    solution += arr[i];
  }
  return solution;
}

console.log(sumArray([1, 2, 3]));
