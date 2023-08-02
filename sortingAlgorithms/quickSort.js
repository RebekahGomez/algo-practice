// this uses recursion
// N log of N - the most efficient sorting method - most efficient space/time complexity
// we need to create a function called pivot which takes an array
// pivot function is going to move things to the left and right of the pivot point
// mutating the original array, and then return to us the final position of the pivot point
// we do have to select a pivot point (usually the beginning or end of the array)

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]
  // swap index that we're going to return at the end that represents where the pivot ends up at the end
  let swapIndex = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++
      // swapping the 2 numbers being compared IF the arr[i] is smaller than the pivot
      [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]]
    }
  }

  // one more swap to swap the start and swapIndex
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]]

  return swapIndex
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    // calling the pivot function we created above
    let pivotIndex = pivot(arr, left, right)
    // left side of the pivot (which is in the middle)
    quickSort(arr, left, pivotIndex - 1)
    // right side of the pivot point
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))

