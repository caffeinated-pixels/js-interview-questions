/* 
Implement a function that transposes a matrix array.
*/

/********** 
SOLUTION 1 
using a combination of reduce & forEach
**********/
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

note: this solution assumes that all nested arrays inside the input are:
- the same length
- contain the same numbers in the same order
*/

/********** 
SOLUTION 2
based on Scrimba's solution of using a nested map function
**********/
const transposeMatrix2 = (array) => {
  return array.map((_, i) => array.map((value) => value[i]))
}

console.log(
  transposeMatrix2([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
) // [[1,1,1],[2,2,2],[3,3,3]]

/* 
- call map on array
- inside map function, call map on array again
- we then use the index from the outer map function to grab the right value from the inner map function
- essentially, we're running nested loops to populate each nested array with the same number
- return the resulting array

note: as with the above solution, this assumes that all nested arrays inside the input are:
- the same length
- contain the same numbers in the same order
*/
