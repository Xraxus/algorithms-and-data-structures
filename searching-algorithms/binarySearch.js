// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

// This algorithm should be more efficient than linearSearch

// Time complexity: O(log n)

function binarySearch(array, value) {
  let leftPointer = 0
  let rightPointer = array.length - 1

  while (leftPointer < rightPointer) {
    const midPointer = Math.ceil((rightPointer + leftPointer) / 2)
    console.log(leftPointer, midPointer, rightPointer)

    if (array[midPointer] === value) return midPointer
    else if (array[midPointer] < value) leftPointer = midPointer + 1
    else if (array[midPointer] > value) rightPointer = midPointer - 1
  }

  return -1
}

// Test inputs
// console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ) // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ) // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ) // -1
