/* 
Write a function to remove the duplicates from an array. The only array method you can use is array.reduce(). 
*/

const removeDuplicateValues = (array) => {
  return array.reduce((acc, curr) => {
    if (acc.includes(curr)) return acc
    return acc.concat(curr)
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
