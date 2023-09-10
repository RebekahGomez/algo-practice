// Prompt:
// - Write a function called removeEnds that accepts a single string argument,
//   then returns the a string with the first and last characters removed.
// - If the length of the string argument is less than 3, return an empty string.
// Examples:
// removeEnds('SEI Rocks!'); //=> "EI Rocks"
// removeEnds('a'); //=> "" (empty string)

// OPTION 1 USING A FOR LOOP
// function removeEnds(str) {
//   if (str.length < 3) {
//     return "";
//   }
//   let result = "";
//   for (let i = 1; i < str.length - 1; i++) {
//     result += str[i];
//   }
//   return result;
// }

// console.log(removeEnds("hello"));

// OPTION 1 USING .SLICE()
function removeEnds(str) {
  if (str.length < 3) {
    return "";
  }
  let result = str.slice(1, -1);
  return result;
}

console.log(removeEnds("goodbye"));
// .slice() method is an array instance that returns a shallow copy of a portion of an array into a new array object
// from start to end (not including the end) where start and end represent the index of items in that array.
// The original array will not be modified.
