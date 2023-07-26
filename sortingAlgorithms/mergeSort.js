// EXAMPLE OF RECURSION
// function sum(num) {
//   if (num == 0) {
//     return num
//   }
//   return num + sum(num - 1)
// }

// console.log(sum(3))


// MERGE FUNCTIONS *ONLY* ACCEPT SORTED ARRAYS
// Merges 2 sorted arrays
function merge(arr1, arr2) {
  const results = []

  let i = 0
  let j = 0

  // this while loop will compare the [i] and [j] arrays and sort them 
  // until one of the arrays ends
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++;
    } else {
      results.push(arr2[j])
      j++
    }
  }

  // these loops will push the rest of the remaining arrays after the first loop
  // has been broken out of once one of the arrays has ended
  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }

  return results
}

// console.log(merge([2, 14, 99, 100], [1, 10, 50]))

// MERGESORT SORTS AN UNSORTED ARRAY
// Start with the base case
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // we need to split the array in half every time we call the function
  // so we need to find the midpoint, even if the array is an odd number
  // this will split the array in half and round down
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))

  // this calls back to the first function we made, merge --> what's happening is
  // with mergeSort, we're looking at the unsorted array of 7 numbers
  // we're breaking that array down to arrays with only 1 item in them and putting them
  // into "left" or "right" variables. After the arrays are only 1 item, then we
  // call the function "merge" and compare 2 individual arrays, which are already 
  // sorted since an array with a single item is, by default, sorted.
  return merge(left, right)
}

console.log(mergeSort([14, 22, 78, 63, 2, 10, 4]))