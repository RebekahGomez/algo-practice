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

// OPTION 2 CHANING BUILT-IN METHODS
function reverseString(str) {
  return str.split("").reverse("").join("").toUpperCase("");
}

console.log(reverseString("goodbye"));

// OPTION 3 W/ DECREMENTING FOR LOOP
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  let upperString = newString.toUpperCase("");
  return upperString;
}

console.log(reverseString("sayWhat"));

// OPTION 4 W/ RECURSION
function reverseString(str) {
  if (str === "") {
    return "";
  } else {
    return reverseString(str.substr(1)) + str.charAt(0).toUpperCase();
  }
}

console.log(reverseString("gotcha"));

// OPTION 5 TERNARY OPERATOR
function reverseString(str) {
  return str === ""
    ? ""
    : reverseString(str.substr(1)) + str.charAt(0).toUpperCase();
}

console.log(reverseString("yowzah"));
