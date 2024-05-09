function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (const char of word1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1
  }

  for (const char of word2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1
  }

  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false
    }
  }

  return true
}

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
// Time Complexity - O(n)

// Test cases
console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
