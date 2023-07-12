
// FIRST BUBBLE SORT OPTION - INEFFICIENT
function bubbleSort(arr) {
  // i in this loop isn't doing any calculations other than allowing the inner loop j to iterate through the array
  // i will allow j to make comparisions until the end of the array
  for (let i = 0; i < arr.length; i++) { // you could use a forEach - any time you're going from beginning to the end, you can use forEach
    for (let j = 0; j < arr.length; j++) { // we're looking through the same array
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] // this is array destructuring - making the stuff on the right equal the stuff on the left, I think
      }
    }
  }
  return arr
}

// console.log(bubbleSort([29, 10, 14, 37, 30, 17]));
// above is a correct way to do it, but it's not as efficient as it can be
// the inner loop is comparing the final number to something "undefined" after the loop has ended
// we want the loop to NOT compare the final large numbers once they've already been sorted
// the above code will run probably 10 times longer than necessary


// SECOND BUBBLE SORT OPTION - EFFICIENT
function bubbleSort(arr) {

  for (let i = arr.length; i > 0; i--) { // we're starting at the END of the loop (arr.length) then DECREMENTING by one to the beginning of the loop
    for (let j = 0; j < i - 1; j++) { // rather than j < arr.length, we changed it to j < i - 1
      // we're starting j at 0, and it's going to where i is in the loop, minus 1, and remember, i started at the END of the loop
      // so we're never going beyond the array and no longer comparing items that have already been sorted
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

// console.log(bubbleSort([29, 10, 14, 37, 30, 17]));
// above code is a LOT more efficient - but it will still continue iterating through 
// after the array is sorted because the loop is checking the numbers at the beginning of the array
// even if they're sorted


// THIRD BUBBLE SORT OPTION - MOST EFFICIENT
function bubbleSort(arr) {

  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr
}

// console.log(bubbleSort([29, 10, 14, 37, 30, 17]));

// THIS WORKS WITH THE ALPHABET TOO 
function bubbleSort(arr) {

  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr
}

console.log(bubbleSort(['a', 'c', 'b', 'z', 't', 'j']));