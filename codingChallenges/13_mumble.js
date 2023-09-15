// Prompt:
// - Write a function called mumble that accepts a single string argument.
// - The function should return a string that has each character repeated
// the number of times according to its position within the string arg.
// In addition, each repeated section of characters should be separated by a hyphen(-).
// - Examples describe it best..
// Examples:
// mumble('X'); //=> 'X'
// mumble('abc'); //=> 'a-bb-ccc'
// mumble('121'); //=> '1-22-111'
// mumble('!A 2'); //=> '!-AA-   -2222'

// OPTION 1 W/ FOR LOOP
// function mumble(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result += str[i].repeat(i + 1);
//     if (i !== str.length - 1) {
//       result += "-";
//     }
//   }
//   return result;
// }

// console.log(mumble("abc"));

// .repeat() method is used to construct and return a new string that contains a specified number of
// copies of the original string. It concatenates th ese copies together. This method does not modify
// the original string but returns a new string.
// str.repeat(count); --> count is an integer between 0 and Infinity. It indicates the number of times
// to repeat the original string.
// EG: console.log('A'.repeat(3)) --> Outputs: 'AAA'

// OPTION 2 W/ SPLIT, REPEAT, & JOIN
function mumble(str) {
  let newStr = str.split("");
  let arr = [];
  for (let i = 0; i < newStr.length; i++) {
    arr.push(newStr[i].repeat(i + 1));
  }
  return arr.join("-");
}

console.log(mumble("cba"));
