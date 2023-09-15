// Prompt:
// - Write a function named fromPairs that creates an object from an array containing nested arrays.
// - Each nested array will have two elements representing key / value pairs used to create key / value pairs
//   in an object to be returned by the function.
// - If a key appears in multiple pairs, the rightmost pair should overwrite previous the previous
// entry in the object.
// Examples:
// fromPairs([ ['a', 1], ['b', 2], ['c', 3] ]) //=> { a: 1, b: 2, c: 3 }
// fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ]) //=> { name: "Sally", age: 24 }

function fromPairs(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i][0];
    let value = arr[i][1];
    result[key] = value;
  }
  return result;
}

console.log(
  fromPairs([
    ["name", "Rebekah"],
    ["age", 36],
    ["location", "NYC"],
    ["name", "Reebs"],
  ])
);

// Remember that to assign value to a key in an object, we use the following syntax:
// objectName[keyVariable] = valueVariable;
// so with the line: result[key] = value; we are assigning the key/value pairs in the result object
// We cannot use dot notation in this function because in dot notation (EG: result.key = value),
// JavaScript is looking for a property named "key" on the "result" object, rather than assigning
// the key/value pair variables to the object
