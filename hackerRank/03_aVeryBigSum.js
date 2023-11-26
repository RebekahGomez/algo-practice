// In this challenge, you are required to calculate and print the sum of the elements in an array,
// keeping in mind that some of those integers may be quite large.
// Function Description
// Complete the aVeryBigSum function. It must return the sum of all array elements.
// aVeryBigSum has the following parameter(s):
// int arr[n]: an array of integers
// Return
// long: the sum of all array elements
// Input Format
// The first line of the input consists of an integer .
// The next line contains  space-separated integers contained in the array.
// Output Format
// Return the integer sum of the elements in the array.
// Constraints
// 1 <= n <= 10
// 0 <= arr[i] <= 10^10

// Sample Input
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output
// 5000000015

// SIMPLY RETURN SUM OF ARRAY
function aVeryBigSum(arr) {
  let solution = 0;
  for (let i = 0; i < arr.length; i++) {
    solution += arr[i];
  }
  return solution;
}

// REDUCE METHOD AS REGULAR FUNCTION
function aVeryBigSum(arr) {
  return arr.reduce(function (acc, curr) {
    return acc + curr;
  });
}

// REDUCE METHOD AS ARROW FUNCTION
function aVeryBigSum(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

console.log(aVeryBigSum([100000001, 100000002, 100000003]));
