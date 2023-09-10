// Prompt:
// - Write a function called reverseUpcaseString that accepts a single string argument,
//   then returns the string with its characters in reverse order and converts all characters to uppercase.
// Examples:
// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES"

// OPTION 1 BUILT-IN METHODS
function reverseUpcaseString(str) {
  let splitStr = str.split("");
  let reverseStr = splitStr.reverse("");
  let joinStr = reverseStr.join("");
  let result = joinStr.toUpperCase("");
  return result;
}

console.log(reverseUpcaseString("hello"));
