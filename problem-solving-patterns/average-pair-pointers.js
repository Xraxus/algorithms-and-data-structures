// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)
// Space: O(1)

// STEPS:
// 1. Create a function called averagePair that accepts an array and a target average
// 2. Create a left pointer at the start of the array and a right pointer at the end of the array

// 3. While the left pointer comes before the right pointer:
//    a. Calculate the average of the pair
//    b. If the average equals the target, return true
//    c. If the average is less than the target, move the left pointer up
//    d. If the average is greater than the target, move the right pointer down
// 4. Return false

function averagePair(arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const average = (arr[left] + arr[right]) / 2
    if (average === target) return true
    if (average < target) left++
    else right--
  }

  return false
}

console.log(averagePair([1, 2, 3], 2.5)) // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4)) // false
