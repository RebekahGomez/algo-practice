// Prompt:
// - Write a function named charCount that accepts a single string argument
// and returns an object that represents the count of each character in the string.
// - The returned object should have keys that represent the character with
// its value set to the how many times the character appears in the string argument.
// - Upper and lower case characters should be counted separately.
// - Space characters should be counted too.
// Examples:
// charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
// charCount('Today is fantastic!')
// //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }

// OPTION 1: USING A FOR LOOP
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("interesting"));
// charAt() is a method available to strings - it allows you to access a specific character in a string based on index
// For each position "i" in the string "str" we're grabbing the character at that position
// and storing it in the variable "char"
// If the "char" already exists as a key in the "result" object, then we increase its value by 1
// But if the "char" doesn't exist in the "result" object, then we add it as a new key
// with a value of 1

// OPTION 2: BRACKET NOTATION
function charCount(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (result[char]) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("brackets"));

// OPTION 3: FOR...OF LOOP & HASOWNPROPERTY
function charCount(str) {
  let result = {};
  for (let char of str) {
    if (result.hasOwnProperty(char)) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

console.log(charCount("property"));
// The for...of loop makes it easier to loop through iterable objects.
// For each iteration of the loop "char" will take on the value of the next character in the string "str"
// So you don't have to use indexing with bracket notation or charAt()
// .hasOwnProperty() is a method that checks if the object has a specific property or key
// It's used to differentiate between properties that are present on the object directly versus
// those t hat might hbe inherited from the object's prototype chain.
