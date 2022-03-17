/* 
Leap year rules:
  - The year must be evenly divisible by 4
  - If the year can also be evenly divided by 100, it is not a leap year, unless:
  - the year is also evenly divisible by 400. Then it is a leap year.
*/

/********** 
SOLUTION 1 
using sequential if statements
**********/
const isLeapYear = (year) => {
  if (year % 4 !== 0) return false
  if (year % 100 === 0 && year % 400 !== 0) return false

  return true
}

console.log(isLeapYear('2020')) // true
console.log(isLeapYear('2018')) // false
console.log(isLeapYear('1700')) // false
console.log(isLeapYear('1600')) // true
console.log(isLeapYear('2400')) // true
console.log(isLeapYear('2200')) // false
console.log(isLeapYear('2300')) // false
console.log(isLeapYear('2500')) // false

/********** 
SOLUTION 2
based on Scrimba's ternary statement
**********/
const isLeapYear2 = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}

console.log(isLeapYear2('2020')) // true
console.log(isLeapYear2('2018')) // false
console.log(isLeapYear2('1700')) // false
console.log(isLeapYear2('1600')) // true
console.log(isLeapYear2('2400')) // true
console.log(isLeapYear2('2200')) // false
console.log(isLeapYear2('2300')) // false
console.log(isLeapYear2('2500')) // false
