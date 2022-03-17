/* 
Implement run length encode and decode functions. Run-length encoding is
        a form of data compressions where consecutive data elements are replaced
        by one data value and a count.
*/

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
  const encodedGroups = string.match(/\d\w/g)

  return encodedGroups.reduce((acc, curr) => {
    let string = ''
    const loopsToRun = Number(curr[0])

    for (let i = 0; i < loopsToRun; i++) {
      string += curr[1]
    }

    return (acc += string)
  }, '')
}

/* steps:
1. use match & regex to create array of encodedgroups
  - \d\w matches a digit followed by a letter
2. iterate through array with reduce to decode the encodedgroups, for each iteration:
  - create an empty string
  - use the digit to set the number of for loopsToRun
  - each loop adds a letter to string
  - add string to the accumulator when the loop finishes
3. return the accumulated value
*/

console.log(encode('wwwiiuuuu')) // 3w2i4u
console.log(encode('xxddeeeettyxz')) // 2x2d4e2t1y1x1z

console.log(decode('2u3a4o')) // uuaaaoooo
console.log(decode('1r4b1t5s3x2w')) // rbbbbtsssssxxxww
