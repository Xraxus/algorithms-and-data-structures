// time complexity: O(n^2)
// space complexity: O(1)

function insertionSort(array) {
  // Start from the second element (i = 1)
  for (let i = 1; i < array.length; i++) {
    // The value of current element to be inserted
    let currentValue = array[i]
    // Start comparing with the previous item
    let j = i - 1
    // Shift elements of the sorted segment to the right to find the correct position for 'current'
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j]
      j--
    }
    // Insert 'current' in its correct position
    array[j + 1] = currentValue
  }

  // Return the sorted array
  return array
}

//TEST INPUT
console.log(insertionSort([3, 2, 1, 5, 4])) // [1, 2, 3, 4, 5]
console.log(insertionSort([3, 2, 1, 5, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(insertionSort([9, 8, 7, 6, 5])) // [5, 6, 7, 8, 9]
console.log(insertionSort([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(insertionSort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
