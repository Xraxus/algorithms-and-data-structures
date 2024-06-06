// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  const newArr = []

  for(const item of arr) {
    if (Array.isArray(item)) {
      newArr.push(...flatten(item))
    } else {
      newArr.push(item)
    }
  }

  return newArr
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
