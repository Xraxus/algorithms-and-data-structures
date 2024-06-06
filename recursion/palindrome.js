// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome.
// Otherwise it returns false.

function isPalindrome(str) {
  if (str.length <= 1) return true
  else if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1))

  return false
}

console.log(isPalindrome('aw')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
