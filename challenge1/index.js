/* 
CHALLENGE BRIEF: 
check if string is pangram (contains all letters of English alphabet)

Gotchas:
letter casing
spaces
*/

const abc = 'abcdefghijklmnopqrstuvwxyz'

/********** 
SOLUTION 1 
using every() & indexOf()
**********/
const checkPangram1 = (string) => {
  const abcArray = abc.split('')
  const testString = string.toLowerCase()
  const isPangram = abcArray.every((letter) => testString.indexOf(letter) != -1)

  console.log('solution1', string, isPangram)
}

checkPangram1('The quick Brown fox jumps over the lazy DOG')
checkPangram1('abcdefghijklmnopqrstuvwxyz')
checkPangram1('IM noT aPANgram')

/* 
1. convert abc from string to array using .split(')
2. convert input string to lowercase to create testString
3. iterate through abcArray with .every()
    - test if each letter occurs in testString using .indexOf()
*/

/********** 
SOLUTION 2
using for loop & indexOf()
**********/
const checkPangram2 = (string) => {
  const testString = string.toLowerCase()
  let isPangram = true

  for (let i = 0; i < abc.length; i++) {
    const currentLetter = abc[i]
    const isCurrentLetterAbsent = testString.indexOf(currentLetter) === -1
    if (isCurrentLetterAbsent) {
      isPangram = false
      break
    }
  }

  console.log('solution2', string, isPangram)
}

checkPangram2('the quick Brown fox jumps over the lazy DOG')
checkPangram2('abcdefghijklmnopqrstuvwxyz')
checkPangram2('IM noT aPANgram')

/* 
1. convert string to lowercase
2. set isPangram variable to true
3. for loop through every letter in abc
    - check if currentLetter is present in testString using .indexOf()
    - if currentLetter not present, set isPangram to false and break the loop
4. return the value of isPangram (either true or false)
*/

/********** 
SOLUTION 3
using nested for loop
**********/
const checkPangram3 = (string) => {
  const testString = string.toLowerCase()
  let isPangram = true

  for (let i = 0; i < abc.length; i++) {
    if (isPangram == false) break
    const currentLetterAbc = abc[i]

    for (let j = 0; j < testString.length; j++) {
      const currentLetterTestString = testString[j]

      if (currentLetterAbc === currentLetterTestString) break

      if (j === testString.length - 1) isPangram = false
    }
  }

  console.log('solution3', string, isPangram)
}

/* 
1. convert string to lowercase
2. set isPangram variable to true
3. for loop through every letter in abc
    - break if isPangram is false
    - each loop for loops through every letter in testString
    - if current letter in abc equal to current letter in testString, break
    - if reach end of testString without a match, set isPangram to false (causes outer loop to break)
4. return the value of isPangram (either true or false)
*/

checkPangram3('the quick Brown fox jumps over the lazy DOG')
checkPangram3('abcdefghijklmnopqrstuvwxyz')
checkPangram3('IM noT aPANgram')

/********** 
SOLUTION 4
same as solution 1, but using my own implementations of every() & indexOf
**********/
function indexOf(queryStr) {
  let index = -1
  const testLength = queryStr.length

  for (let i = 0; i < this.length; i++) {
    const currentSegement = this.slice(i, i + testLength)
    if (currentSegement === queryStr) {
      index = i
      break
    }
  }

  return index
}

String.prototype.indexOf = indexOf

function every(callback) {
  let result = true

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this) === false) {
      result = false
      break
    }
  }

  return result
}

Array.prototype.every = every

const checkPangram4 = (string) => {
  const abcArray = abc.split('')
  const testString = string.toLowerCase()
  const isPangram = abcArray.every((letter) => testString.indexOf(letter) != -1)

  console.log('solution4', string, isPangram)
}

checkPangram4('The quick Brown fox jumps over the lazy DOG')
checkPangram4('abcdefghijklmnopqrstuvwxyz')
checkPangram4('IM noT aPANgram')

/********** 
SOLUTION 5
based on Scrimba solution of creating a set to dedupe
**********/

const checkPangram5 = (string) => {
  const processedString = string.toLowerCase().split(' ').join('')
  const dedupedArray = Array.from(new Set(processedString))

  const isPangram = dedupedArray.length === 26
  console.log('solution5', string, isPangram)
}

/* 
1. convert string to lowercase; remove spaces by spliting then rejoining
2. convert processedString to set to remove duplicates, then convert back to array
3. check if dedupedArray length equal to 26
*/

checkPangram5('The quick Brown fox jumps over the lazy DOG')
checkPangram5('abcdefghijklmnopqrstuvwxyz')
checkPangram5('IM noT aPANgram')

/********** 
SOLUTION 6
based on Scrimba solution of using Regex and match
**********/

const checkPangram6 = (string) => {
  const matchArray = string.toLowerCase().match(/[a-z]/g)
  const matchArrayDeduped = [...new Set(matchArray)]
  const isPangram = matchArrayDeduped.length === 26

  console.log('solution6', string, isPangram)
}

/* 
1. convert string to lowercase; create array of letters using match()
2. convert matchArray to set to remove duplicates,then convert back to array
3. check if matchArrayDeduped length equal to 26
*/

checkPangram6('The quick Brown fox jumps over the lazy DOG')
checkPangram6('abcdefghijklmnopqrstuvwxyz')
checkPangram6('IM noT aPANgram')
