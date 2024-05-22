// Frequency Counter  - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.

// Restrictions:
// Time - O(n)
// Space - O(n)


function areThereDuplicates(...inputArray) {
  if(inputArray.length <= 1)
    return false
    
  const lookup = {}
    
  for(const item of inputArray){
      lookup[item] ? lookup[item] += 1 : lookup[item] = 1
  }
  
  if(Object.values(lookup).some( val => val > 1))
    return true
    
  return false
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 