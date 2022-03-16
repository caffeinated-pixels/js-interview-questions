/* 
CHALLENGE BRIEF: 
Implement an isogram check function. An isogram is string in which all letter are only present once. 

Gotchas:
- letter case
*/

const isIsogram = (string) => {
  const arrayFromString = string.toLowerCase().split('')
  const dedupedArrayFromString = [...new Set(arrayFromString)]

  return dedupedArrayFromString.length === string.length
}

console.log(isIsogram('ambidExtrously')) // true
console.log(isIsogram('patteRN')) // false

/* 
1. convert string to array of lowercase letters
2. dedupe array using set, then convert back to array
3. check if string.length equal dedupedArrayFromString.length
*/
