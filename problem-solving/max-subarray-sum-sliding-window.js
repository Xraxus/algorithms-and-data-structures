
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

// STEPS:
// 1. If the length of the array is less than the number, return null.
// 2. Initialize a variable, maxSum, to 0.
// 3. Loop through the array from 0 to the number.
// 4. Add the elements to maxSum.
// 5. Initialize a variable, tempSum, to maxSum.
// 6. Loop through the array from the number to the end.
// 7. Add the element at the current index to tempSum and subtract the element at the index number elements before the current index.
// 8. Set maxSum to the maximum of maxSum and tempSum.
// 9. Return maxSum.

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null

  let maxSum = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  let tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) // 5
console.log(maxSubarraySum([2, 3], 3)) // null
