// Time Complexity: O(n^2)
// Space Complexity: O(1)

// Optimized with noSwaps
function bubbleSortOptimized(arr) {
  let noSwaps
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

//TEST INPUT
console.log(bubbleSortOptimized([3, 2, 1, 5, 4])) // [1, 2, 3, 4, 5]
console.log(bubbleSortOptimized([3, 2, 1, 5, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(bubbleSortOptimized([3, 2, 1, 5, 4, 6, 7])) // [1, 2, 3, 4, 5, 6, 7]
console.log(bubbleSortOptimized([3, 2, 1, 5, 4, 6, 7, 8])) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(bubbleSortOptimized([3, 2, 1, 5, 4, 6, 7, 8, 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
