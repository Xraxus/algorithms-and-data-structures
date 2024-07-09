// time complexity: O(n log n)
// space complexity: O(n)

function mergeSort(arr) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))
  return mergeSortedArrays(left, right)
}

function mergeSortedArrays(arr1, arr2) {
  const result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}

//TEST INPUT
console.log(mergeSort([3, 2, 1, 5, 4])) // [1, 2, 3, 4, 5]
console.log(mergeSort([3, 2, 1, 5, 4, 6])) // [1, 2, 3, 4, 5, 6]
console.log(mergeSort([3, 2, 1, 5, 4, 6, 7])) // [1, 2, 3, 4, 5, 6, 7]
console.log(mergeSort([3, 2, 1, 5, 4, 6, 7, 8])) // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeSort([3, 2, 1, 5, 4, 6, 7, 8, 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeSort([3, 2, 1, 5, 4, 6, 7, 8, 9, 10])) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
