// Prompt:
// - Write a function called reverseUpcaseString that accepts a single string argument,
//   then returns the string with its characters in reverse order and converts all characters to uppercase.
// Examples:
// reverseUpcaseString("SEI Rocks!"); //=> "!SKCOR IES"

function reverseUpcaseString(singleString) {
  let result = singleString.toUpperCase();
  return result;
}

console.log(reverseUpcaseString("hello"));
