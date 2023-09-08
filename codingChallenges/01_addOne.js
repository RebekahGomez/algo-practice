// Prompt:
// Write a function called addOne that takes a single number as an argument
// and returns that number plus 1.
// Examples:
// addOne(1) //=> 2
// addOne(-5) //=> -4

// OPTION 1
function addOne(num) {
  num += 1;
  return num;
}

console.log(addOne(5));

// OPTION 2
function addOne(num) {
  return num + 1;
}

console.log(addOne(1));
