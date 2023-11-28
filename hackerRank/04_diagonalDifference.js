// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix  is shown below:
//1 2 3
//4 5 6
//9 8 9
//The left-to-right diagonal 1+5+9 = 15.
// The right to left diagonal 3+5+9 = 17.Their absolute difference is 2.
// diagonalDifference takes the following parameter:
// int arr[n][m]: an array of integers
// Return
// int: the absolute diagonal difference
// Input Format
// The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
// Each of the next n lines describes a row, arr[I], and consists of n space-separated integers arr[I][j] .

// Output Format
// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    leftToRight += arr[i][i];
    rightToLeft += arr[i][arr.length - 1 - i];
  }
  return Math.abs(leftToRight - rightToLeft);
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
