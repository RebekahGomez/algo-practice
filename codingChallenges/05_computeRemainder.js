// Prompt:
// - Write a function named computeRemainder that accepts two numeric arguments
//  and returns the remainder of the division of those two numbers.
// - The first argument should be the dividend and the second argument should be the divisor.
// - If a 0 is passed in as the second argument you should return JavaScript's special numeric value: Infinity.
// - For extra fun, complete this challenge without using the modulus (%) operator.
// Examples:
// computeRemainder(10,2) //=> 0
// computeRemainder(4,0) //=> Infinity
// computeRemainder(10.5, 3) //=> 1.5

// OPTION 1 USING MODULUS % OPERATOR
function computeRemainder(num1, num2) {
  if (num2 === 0) {
    return Infinity;
  }
  let answer = num1 % num2;
  return answer;
}

console.log(computeRemainder(10.5, 2));

// OPTION 2 WITHOUT % OPERATOR
function computeRemainder(dividend, divisor) {
  if (divisor === 0) {
    return Infinity;
  }
  let remainder = dividend - divisor * Math.floor(dividend / divisor);
  return remainder;
}

console.log(computeRemainder(7, 3));

// Math.floor(dividend / divisor) rounds the quotient down to the nearest whole number
// 7/3 --> 2.333, with Math.floor output would be 2
// Multiplying the divisor by the floored quotient gives the largest number less than the dividend that is a multiple of the divisor
// 3(divisor) * 2 = 6
// Subtracting the above product from the dividend gives you the remainder
// 7(dividend) - 6 = 1, which is the remainder
