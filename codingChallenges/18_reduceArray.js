// Prompt:
// The goal is of this challenge is to write a function that performs the functionality
// of JavaScript's Array.prototype.reduce method.
// - Write a function named reduceArray that accepts three arguments:
// (1) an array; (2) a callback function; and(3) a value used as the initial value of the "accumulator".
// - The reduceArray function should return whatever is returned by the
// callback function on the last iteration.
// - The reduceArray function should iterate over each element in the array (first arg).
// For each iteration, invoke the callback function (2nd arg), passing to it three arguments:
// (1) the "accumulator", which is the value returned by the callback during the previous iteration;
// (2) the  current element; and (3) the index of the current iteration.
// - On the first iteration, provide the third argument provided to reduceArray
// as the first argument when invoking the callback, then for subsequent iterations,
// provide the value returned by the callback during the previous iteration.

// Examples:
// reduceArray( [1, 2, 3], function(acc, n) {
//   return acc + n;
// }, 0);
// //=> 6
// This example adds the accumulator and the currentValue (n)

// reduceArray( [1, 2, 3], function(acc, n, i) {
//   return acc + n + i;
// }, 0);
// //=> 9
// This example adds the accumulator, currentValue (n), and the currentIndex (i)

// reduceArray( ['Yes', 'No', 'Yes', 'Maybe'], function(acc, v) {
//   acc[v] = acc[v] ? acc[v] + 1 : 1;
//   return acc;
// }, {} );
// //=> {"Yes": 2, "No": 1, "Maybe": 1}

// OPTION 1 STANDARD .REDUCE() METHOD - returning the sum of an array
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (accumulator, currentVal) {
  return accumulator + currentVal;
}, 0);

console.log(sum);

// OPTION 2 - STANDARD .REDUCE() USING EXAMPLE 3 FROM PROMPT
const arr = ["yes", "no", "yes", "maybe"];
const result = arr.reduce(function (acc, currentVal) {
  acc[currentVal] = acc[currentVal] ? acc[currentVal] + 1 : 1;
  return acc;
}, {});

console.log(result);
