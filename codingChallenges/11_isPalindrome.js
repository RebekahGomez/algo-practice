// Prompt:
// - Write a function called isPalindrome that accepts a single string argument,
//   then returns true or false depending upon whether or not the string is a palindrome.
// - A palindrome is a word or phrase that are the same forward or backward.
// - Casing and spaces are not included when considering whether or not a string is a palindrome.
// - If the length of the string is 0 or 1, return true.
// Examples:
// isPalindrome('SEI Rocks'); //=> false
// isPalindrome('rotor'); //=> true
// isPalindrome('A nut for a jar of tuna'); //=> true
// isPalindrome(''); //=> true

// OPTION 1 W/ A FOR LOOP COMPARING UP TO HALF THE LENGTH OF THE STRING
function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(" ", "");
  if (str.length <= 1) {
    return true;
  }
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("helloh"));

// OPTION 2 W/ BUILT-IN METHODS
function isPalindrome(str) {
  let newStr = str.toLowerCase().replaceAll(" ", "");
  if (newStr.length <= 1) {
    return true;
  }
  let splitStr = newStr.split("");
  let reverseArr = splitStr.reverse();
  let newArr = reverseArr.join("");
  if (newStr === newArr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("helLO lleh"));
