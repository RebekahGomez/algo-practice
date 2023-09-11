// Prompt:
// - Write a function called formatWithPadding that accepts three arguments:
//   - A numeric argument (an integer) representing the number to format.
//   - A string argument(a single character) representing the character used to "pad" the
//     returned string to a minimum length.
//   - Another numeric argument (an integer) representing the length to "pad" the returned string to.
// - The function should return the integer as a string, "left padded" to the length of the
//    3rd arg using the character provided in the 2nd arg.
// - If the length of the integer converted to a string is equal or greater than the 3rd argument,
//   no padding is needed - just return the integer as a string.
// Examples:
// formatWithPadding(123, '0', 5); //=> "00123"
// formatWithPadding(42, '*', 10); //=> "********42"
// formatWithPadding(1234, '*', 3); //=> "1234"

function formatWithPadding(int1, char, int2) {
  let numString = int1.toString();

  if (numString.length >= int2) {
    return numString;
  }

  if (char.length > 1) {
    return "Second argument must be a single character";
  }
  let result = numString.padStart(int2, char);
  return result;
}

console.log(formatWithPadding(2, "a", 3));
// Keep in mind we have already converted int1 to a string, so we're comparing the length
// of a string to the number in the 3rd argument, which is still an integer.
// So if this is our output: console.log(formatWithPadding(2, "a", 3));
// the length of the first argument (2) is just "1", compared to the integer "3" of the 3rd argument
