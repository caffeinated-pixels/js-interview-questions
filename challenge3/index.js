/* 
CHALLENGE BRIEF: 
Implement a rain language translator - toRainLanguage()
- If the number has 3 as a factor, output 'Pling'.
- If the number has 7 as a factor, output 'Plong'.
- If the number has 5 as a factor, output 'Plang'.
- If divisable by multiple factors, output a string combination, eg 'PlingPlong' .
Return input number in all over cases

Examples:
- 15 should return 'PlingPlong'
- 35 should return 'PlangPlong'
- 21 should return 'PlingPlong'
*/

const toRainLanguage = (num) => {
  let phrase = ''

  if (num % 3 === 0) phrase += 'Pling'
  if (num % 5 === 0) phrase += 'Plang'
  if (num % 7 === 0) phrase += 'Plong'
  if (phrase === '') phrase = num

  return phrase
}

console.log(toRainLanguage(3))
console.log(toRainLanguage(15))
console.log(toRainLanguage(21))
console.log(toRainLanguage(35))
console.log(toRainLanguage(1))
