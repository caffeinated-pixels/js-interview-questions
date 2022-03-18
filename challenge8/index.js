/* 
Write an array mapping function using array.reduce().
*/

/********** 
SOLUTION 1 
using standalone function
**********/
const map = (array, callback) => {
  return array.reduce((acc, curr) => acc.concat(callback(curr)), [])
}

console.log(map([1, 2, 3], (v) => v + 1)) // [2,3,4]
/* 
  - call reduce on array input, set intial value as empty array
  - pass curr into the callback
  - add the result of callback(curr) to the accumulator array
*/

/********** 
SOLUTION 2
using array.prototype
**********/
function mapMe(callback) {
  return this.reduce((acc, curr) => acc.concat(callback(curr)), [])
}

Array.prototype.map = mapMe

const myArr = [1, 2, 3]

console.log(myArr.map((v) => v + 1))

/* 
Same logic as above, but:
 - using a standard function declaration to allow for this object binding
 - call reduce on this
 - replace the map prototype with our own map function (mapMe)
 - call our map method on our test array
*/
