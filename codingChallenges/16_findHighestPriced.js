// Prompt:
// - Write a function named findHighestPriced that accepts a single array of objects.
// - The objects contained in the array are guaranteed to have a price property holding a numeric value.
// - The function should return the object in the array that has the largest value held in the price property.
// - If there's a tie between two or more objects, return the first of those objects in the array.
// - Return the original object, not a copy.
// - DO NOT mutate the array, i.e., do not sort it
// Examples:
// findHighestPriced([
//   { sku: 'a1', price: 25 },
//   { sku: 'b2', price: 5 },
//   { sku: 'c3', price: 50 },
//   { sku: 'd4', price: 10 }
// ]);
// //=> { sku: 'c3', price: 50 }
// findHighestPriced([
//   { sku: 'a1', price: 25 },
//   { sku: 'b2', price: 50 },
//   { sku: 'c3', price: 50 },
//   { sku: 'd4', price: 10 }
// ]);
// //=> { sku: 'b2', price: 50 }

// OPTION 1 USING A FOR LOOP
// function findHighestPriced(arr) {
//   let highestPricedObject = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i].price > highestPricedObject.price) {
//       highestPricedObject = arr[i];
//     }
//   }
//   return highestPricedObject;
// }

// console.log(
//   findHighestPriced([
//     { sku: "a1", price: 25 },
//     { sku: "b2", price: 5 },
//     { sku: "c3", price: 50 },
//     { sku: "d4", price: 10 },
//   ])
// );

// OPTION 2 USING NESTED LOOP IF YOU DON'T KNOW THE KEY AHEAD OF TIME
function findHighestPriced(arr) {
  let highestPricedObject = arr[0];
  let highestValue = Number.NEGATIVE_INFINITY;

  for (let obj of arr) {
    for (let key in obj) {
      if (typeof obj[key] === "number" && obj[key] > highestValue) {
        highestValue = obj[key];
        highestPricedObject = obj;
      }
    }
  }
  return highestPricedObject;
}

console.log(
  findHighestPriced([
    { sku: "a1", price: 25 },
    { sku: "b2", price: 5 },
    { sku: "c3", price: 50 },
    { sku: "d4", price: 10 },
  ])
);
