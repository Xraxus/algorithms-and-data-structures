// time complexity: O(n log n)
// space complexity: O(log n)

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }

  // Assume the pivot is always the first element
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)
  return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    //Left
    quickSort(arr, left, pivotIndex - 1)
    //Right
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

//TEST INPUT
console.log(quickSort([3, 2, 1, 5, 4])) // [1, 2, 3, 4, 5]
console.log(quickSort([3, 2, 1, 5, 4, 6, 7, 8, 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  quickSort([
    3, 2, 1, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
