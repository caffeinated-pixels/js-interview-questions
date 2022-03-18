/* 
Write a function that flattens an array using a recursive array.reduce(). 
*/

/********** 
SOLUTION 1 
using typeof & if statement
**********/
const makeFlat = (array) => {
  return array.reduce((acc, curr) => {
    if (typeof curr === 'object') curr = makeFlat(curr)
    return acc.concat(curr)
  }, [])
}

/* 
  - call reduce on array
    - if current value is object (i.e. array), make recurive call makeFlat(curr)
    - then add curr to acc using concat

*/

console.log(makeFlat(['one', ['two', 'three'], ['four', ['five']]])) // ['one','two','three','four','five']

/********** 
SOLUTION 2 
based on Scrimba solution of isArray & ternary
**********/
const makeFlat2 = (array) => {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr) ? [...acc, ...makeFlat(curr)] : [...acc, curr]
  }, [])
}

/* 
  - call reduce on array
    - use Array.isArray(curr) to check current value
      - if it is an array make a recursive call and add the result to the array
      - else add curr to the array
    -  return the flattened array

*/

console.log(makeFlat2(['one', ['two', 'three'], ['four', ['five']]]))
