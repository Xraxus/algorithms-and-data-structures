// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(array) {
  let min
  for (let i = 0; i < array.length; i++) {
    min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    if (i !== min) {
      ;[array[i], array[min]] = [array[min], array[i]]
    }
  }
  return array
}

//TEST INPUT
console.log(selectionSort([3, 2, 1, 5, 4])) // [1, 2, 3, 4, 5]
console.log(selectionSort([3, 2, 1, 5, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(selectionSort([9, 8, 7, 6, 5])) // [5, 6, 7, 8, 9]
console.log(selectionSort([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
console.log(selectionSort([10, 20, 30, 40, 50])) // [10, 20, 30, 40, 50]
console.log(selectionSort([50, 40, 30, 20, 10])) // [10, 20, 30, 40, 50]
