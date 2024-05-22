// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(n, m) {
  const num1 = n.toString()
  const num2 = m.toString()

  if (num1.length !== num2.length) return false

  const digitCounter = {}

  for (const digit of num1) {
    if (digitCounter[digit]) digitCounter[digit] += 1
    else digitCounter[digit] = 1
  }

  for (const digit of num2) {
    if (!digitCounter[digit]) return false
    else digitCounter[digit] -= 1
  }

  return true
}

// Sample Input:
console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
