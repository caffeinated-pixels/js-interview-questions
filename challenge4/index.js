/* 
CHALLENGE BRIEF: 
Implement an isogram check function. An isogram is string in which all letter are only present once. 

Gotchas:
- letter case
*/

/********** 
SOLUTION 1 
using Set to dedupe array of letters
**********/
const isIsogram = (string) => {
  const arrayFromString = string.toLowerCase().split('')
  const dedupedArrayFromString = [...new Set(arrayFromString)]

  return dedupedArrayFromString.length === string.length
}

console.log('Solution 1', isIsogram('ambidExtrously')) // true
console.log('Solution 1', isIsogram('patteRN')) // false

/* 
1. convert string to array of lowercase letters
2. dedupe array using set, then convert back to array
3. check if string.length equal dedupedArrayFromString.length
*/

/********** 
SOLUTION 2
based on Scrimba solution of using .every & .indexOf
**********/
const isIsogram2 = (string) => {
  const arrayFromString = string.toLowerCase().split('')

  return arrayFromString.every(
    (letter, index, array) => array.indexOf(letter) === index
  )
}

console.log('Solution 2', isIsogram2('ambidExtrously')) // true
console.log('Solution 2', isIsogram2('patteRN')) // false

/* 
1. convert string to array of lowercase letters
2. call every on array
  - test if the current index matches the array.indexOf(letter)
  - indexOf returns the first index of the query
  - so, if testing second occurence of a letter, it will not match the current index
*/
