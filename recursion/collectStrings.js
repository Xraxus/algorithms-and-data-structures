// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

function collectStrings(obj) {
  const stringsArray = []

  for (const key in obj) {
    if (typeof obj[key] === 'string') stringsArray.push(obj[key])
    else if (
      typeof obj[key] === 'object' &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    )
      stringsArray.push(...collectStrings(obj[key]))
  }

  return stringsArray
}

const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
