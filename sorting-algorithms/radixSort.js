// time complexity: O(nk)
// space complexity: O(n + k)

// n - lenght of array
// k - number of digits(average)

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(arr) {
  let maxDigits = 0
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(arr[i]))
  }
  return maxDigits
}

function radixSort(arr) {
  let maxDigitCount = mostDigits(arr)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      digitBuckets[digit].push(arr[i])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}

//TEST INPUT
console.log(radixSort([3, 2, 1, 5, 4])) // [1, 2, 3, 4, 5]
console.log(radixSort([3, 2, 1, 5, 4, 6, 7, 8, 9])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(
  radixSort([
    3, 2, 1, 5, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(radixSort([23, 345, 5467, 12, 2345, 9852])) // [12, 23, 345, 2345, 5467, 9852]
