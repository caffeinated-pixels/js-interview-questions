/* 
Implement run length encode and decode functions. Run-length encoding is 
a form of data compressions where consecutive data elements are replaced
by one data value and a count.

The brief doesn't stipulate how you should encode single elements, 
ie should it be: 2x2d4e2t1y1x1z or 2x2d4e2tyxz?

A quick Google suggests that it should be 2x2d4e2t1y1x1z, which means that Scrimba's solution is defective;
the regex should be (\w)\1* not (\w)\1+
*/

/********** 
SOLUTION 1 
using match() and reduce()
**********/
const encode = (string) => {
  const groups = string.match(/(\w)\1*/g)
  return groups.reduce((acc, curr) => (acc += `${curr.length}${curr[0]}`), '')
}

/* steps:
1. use match & regex to create array of grouped letters
  - (\w) captures the first letter, \1* then matches a sequence of that captured letter
2. iterate through array with reduce() to ouput group length and single letter
3. return the accumulated value
*/

const decode = (string) => {
  const encodedGroups = string.match(/\d+\w/g)
  console.log(encodedGroups)

  return encodedGroups.reduce((acc, curr) => {
    const number = curr.match(/\d+/)[0]
    const letter = curr.match(/\D/)[0]
    const sequence = letter.repeat(number)

    return (acc += sequence)
  }, '')
}

/* steps:
In the end, this is somewhat clumsy solution; solution 2 below is much better

1. use match & regex to create array of encodedgroups
  - \d+\w matches 1 or more digits followed by a letter
2. iterate through array with reduce to decode the encodedgroups, for each iteration:
  - use match to grab the number, store in variable
  - use match to grab the letter, store in variable
  - use these two variables with .repeat() to create the letter sequence
  - add sequence to the accumulator when the loop finishes
3. return the accumulated value
*/

console.log(encode('wwwiiuuuu')) // 3w2i4u
console.log(encode('xxddeeeettyxz')) // 2x2d4e2t1y1x1z

console.log(decode('2u3a4o')) // uuaaaoooo
console.log(decode('1r4b1t5s3x22w')) // rbbbbtsssssxxxwwwwwwwwww

/********** 
SOLUTION 2
based on Scrimba solution of just using replace with its replacerFunction param
**********/
const encode2 = (string) => {
  return string.replace(/(\w)\1*/g, (match, p1) => `${match.length}${p1}`)
}

/* steps:
1. use replace method and pass in a function for generating the replacements
  - as before it uses a regex that captures the first letter, then matches a sequence of that letter
  - in the function, you can access the match (match) and the captured letter (p1) through params
  - the function returns the match length concatenated to the letter
  - the function is invoked for each match
2. return the new string
*/

const decode2 = (string) => {
  return string.replace(/(\d+)(\w)/g, (match, p1, p2) => p2.repeat(p1))
}

/* steps:
1. use replace method and pass in a function for generating the replacements
  - (\d+)(\w) matches 1 or more digits followed by a letter
  - the capture groups () are accessible in the function params as p1, p2
  - use the captured number p1 to specficy how many times to repeat the capture letter p2 with the .repeat() method
3. return the new string
*/

console.log('solution2', encode2('wwwiiuuuu')) // 3w2i4u
console.log('solution2', encode2('xxddeeeettyxz')) // 2x2d4e2t1y1x1z

console.log('solution2', decode2('2u3a4o')) // uuaaaoooo
console.log('solution2', decode2('1r4b1t5s3x10w')) // rbbbbtsssssxxxwwwwwwwwww
console.log('solution2', decode2('abcdefg'))
