/* 
Write a function that flattens an array using a recursive array.reduce(). 
*/

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
