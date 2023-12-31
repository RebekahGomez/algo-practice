// Prompt:
// - Write a function named mergeObjects that accepts at least two objects as arguments,
//   merges the properties of the second through n objects into the first object, then finally
//   returns the first object.
// - If any objects have the same property key, values from the object(s) later in the arguments
// list should overwrite earlier values.
// Examples:
// mergeObjects({}, {a: 1});  //=> {a: 1} (same object as first arg)
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4});  //=> {a: 1, b: 2, c: 3, d: 4}
// mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44});  //=> {a: 1, b: 22, c: 3, d: 44}

// OPTION 1 W/ A FOR LOOP & SPREAD OPERATOR
function mergeObjects(...objects) {
  if (objects.length === 0) {
    return {};
  }
  let result = objects[0];
  for (let i = 1; i < objects.length; i++) {
    result = { ...result, ...objects[i] };
  }
  return result;
}

console.log(mergeObjects({ a: 0 }, { a: 1, b: 22 }));

// OPTION 2 W/ OBJECT.ASSIGN()
function mergeObjects(...objects) {
  if (objects.length === 0) {
    return {};
  }
  return Object.assign(...objects);
}

console.log(mergeObjects({ a: 13, b: 22 }, { c: 55, d: 12, a: 0 }));

// Object.assign() is another way to merge properties from multiple source objects into a target object.
// It takes a target object and one or more source objects and then retgurns the target object.
// The properties in the target object are overwritten by properties in the sources if they ahve the same key.
// We still gather all provided objects into an array using the rest parameter '...objects'
// Object.assign(...objects) spreads out the 'objects' array as individual arguments to Object.assign()
// The properties of all the objects will be merges into the first object in the list, and this modified
// first object is what Object.assign() returns
