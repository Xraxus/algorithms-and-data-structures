// Write a function called interpolationSearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

// Interpolation search is an algorithm for searching for a given key in an indexed array that has been ordered by numerical values.
// The algorithm is similar to binary search, but instead of dividing the array in half, interpolation search uses a formula to predict where the value is likely to be.
// WORKS BEST FOR UNIFORMLY DISTRIBUTED ARRAYS.

// The formula for interpolation search is:
// let midPointer = Math.floor(
//   leftPointer + ((rightPointer - leftPointer) / (array[rightPointer] - array[leftPointer])) * (value - array[leftPointer])
// )

// Time Complexity: O(log2(log2 n)) for the average case, and O(n) for the worst case when the array is not uniformly distributed.
// Space complexity: O(1)

function interpolationSearch(array, value) {
  let leftPointer = 0
  let rightPointer = array.length - 1

  while (leftPointer <= rightPointer && value >= array[leftPointer] && value <= array[rightPointer]) {
    let midPointer = Math.floor(
      leftPointer +
        ((rightPointer - leftPointer) /
          (array[rightPointer] - array[leftPointer])) *
          (value - array[leftPointer])
    )

    if (array[midPointer] === value) return midPointer
    else if (array[midPointer] < value) leftPointer = midPointer + 1
    else if (array[midPointer] > value) rightPointer = midPointer - 1
  }

  return -1
}

// Test inputs
console.log(interpolationSearch([1, 2, 3, 4, 5], 2)) // 1
console.log(interpolationSearch([1, 2, 3, 4, 5], 3)) // 2
console.log(interpolationSearch([1, 2, 3, 4, 5], 5)) // 4
console.log(interpolationSearch([1, 2, 3, 4, 5], 6)) // -1

console.log(
  interpolationSearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
) // 2
console.log(
  interpolationSearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
) // 16
console.log(
  interpolationSearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
) // -1
