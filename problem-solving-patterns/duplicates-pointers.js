// Multiple Pointers  - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Time - O(n log n)
// Space - O(n) - JS .sort uses timsort which is O(n)

function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

  let start = 0
  let next = 1
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++
    next++
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 