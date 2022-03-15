/* 
CHALLENGE BRIEF: 
check if string is pangram (contains all letters of English alphabet)

Gotchas:
letter casing
spaces
*/

const abc = 'abcdefghijklmnopqrstuvwxyz'

const checkPangram1 = (string) => {
  const abcArray = abc.split('')
  const testString = string.toLowerCase()

  console.log(abcArray.every((letter) => testString.indexOf(letter) != -1))
}

checkPangram1('The quick Brown fox jumps over the lazy DOG')
checkPangram1('abcdefghijklmnopqrstuvwxyz')
checkPangram1('my name is DAVE')

/* Solution 1
1. convert abc from string to array using .split(')
2. convert input string to lowercase to create testString
3. iterate through abcArray with .every()
    - test if each letter occurs in testString using .indexOf()
*/

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

  console.log(isPangram)
}

checkPangram2('the quick Brown fox jumps over the lazy DOG')
checkPangram2('abcdefghijklmnopqrstuvwxyz')
checkPangram2('my name is DAVE')

/* Solution 2
1. convert string to lowercase
2. set isPangram variable to true
3. for loop through every letter in abc
    - check if currentLetter is present in testString using .indexOf()
    - if currentLetter not present, set isPangram to false and break the loop
4. return the value of isPangram (either true or false)
*/
