/* 
Implement a function that transposes a matrix array.
*/

const transposeMatrix = (array) => {
  return array.reduce((acc, curr) => {
    curr.forEach((value, i) => (acc[i] = acc[i].concat(value)))
    return acc
  }, Array(array.length).fill([]))
}

console.log(
  transposeMatrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
) // [[1,1,1],[2,2,2],[3,3,3]]

/* 
- call reduce on array
- set initial acc to array containing 1 empty array per element inside of input array
- loop through curr; append value to appropriate array inside acc (based on current index in curr)
- return acc
*/
