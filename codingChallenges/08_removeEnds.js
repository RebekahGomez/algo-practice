// Prompt:
// - Write a function called removeEnds that accepts a single string argument,
//   then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.
// Examples:
// removeEnds('SEI Rocks!'); //=> "EI Rocks"
// removeEnds('a'); //=> "" (empty string)

// OPTION 1 USING A FOR LOOP
function removeEnds(str) {
  if (str.length < 3) {
    return "";
  }
  let result = "";
  for (let i = 1; i < str.length - 1; i++) {
    result += str[i];
  }
  return result;
}

console.log(removeEnds("hello"));
