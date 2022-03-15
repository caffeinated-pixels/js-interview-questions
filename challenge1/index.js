/* 
CHALLENGE BRIEF: 
check if string is pangram (contains all letters of English alphabet)

Gotchas:
letter casing
spaces
*/

console.log('dave')

const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram1 = (string) => {
  const abcArray = abc.split('')
  const lcString = string.toLowerCase()

  console.log(abcArray.every((letter) => lcString.indexOf(letter) != -1))
}

isPangram1('The quick Brown fox jumps over the lazy DOG')
isPangram1('abcdefghijklmnopqrstuvwxyz')

/* 
1. convert string to lowercase
2. Remove spaces?

3. iterate through abc with .every() & .indexOf()


*/
