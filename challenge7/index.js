/* 
Write a function to remove the duplicates from an array. The only array method you can use is array.reduce(). 
*/

/********** 
SOLUTION 1 
using includes()
**********/
const removeDuplicateValues = (array) => {
  return array.reduce((acc, curr) => {
    return acc.includes(curr) ? acc : acc.concat(curr)
  }, [])
}
/* 
- intial value is empty array
- if the accumulator (acc) array includes the current value (curr), we return the accumulator
- else we add (concat) curr to acc
*/

console.log(
  removeDuplicateValues(['one', 'two', 'one', 'three', 'three', 'two'])
) // ['one','two','three']

/********** 
SOLUTION 2 
using for of loop
**********/
const removeDuplicateValues2 = (array) => {
  return array.reduce((acc, curr) => {
    let isDuplicate = false

    for (accValue of acc) {
      if (accValue === curr) {
        isDuplicate = true
        break
      }
    }

    return isDuplicate ? acc : acc.concat(curr)
  }, [])
}
/* 
- intial value is empty array
- loop through each value in the accumulator
    - if it equals the current reducer value, we set isDuplicate to true and break out of the loop
- based on the value of isDuplicate, we return either the unmodified acc or acc + curr
*/

console.log(
  removeDuplicateValues2(['one', 'two', 'one', 'three', 'three', 'two'])
) // ['one','two','three']
