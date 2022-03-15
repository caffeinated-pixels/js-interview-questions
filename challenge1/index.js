/* 
CHALLENGE BRIEF: 
check if string is pangram (contains all letters of English alphabet)

Gotchas:
letter casing
spaces
*/

const abc = 'abcdefghijklmnopqrstuvwxyz'

/***** SOLUTION 1 *****/
const checkPangram1 = (string) => {
  const abcArray = abc.split('')
  const testString = string.toLowerCase()

  console.log(
    'solution1',
    string,
    abcArray.every((letter) => testString.indexOf(letter) != -1)
  )
}

checkPangram1('The quick Brown fox jumps over the lazy DOG')
checkPangram1('abcdefghijklmnopqrstuvwxyz')
checkPangram1('my name is DAVE')

/* 
1. convert abc from string to array using .split(')
2. convert input string to lowercase to create testString
3. iterate through abcArray with .every()
    - test if each letter occurs in testString using .indexOf()
*/

/***** SOLUTION 2 *****/
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
checkPangram2('my name is DAVE')

/* 
1. convert string to lowercase
2. set isPangram variable to true
3. for loop through every letter in abc
    - check if currentLetter is present in testString using .indexOf()
    - if currentLetter not present, set isPangram to false and break the loop
4. return the value of isPangram (either true or false)
*/

/***** SOLUTION 3 *****/
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
checkPangram3('my name is DAVE')
