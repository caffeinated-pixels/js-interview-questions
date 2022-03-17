/* 
Implement run length encode and decode functions. Run-length encoding is
        a form of data compressions where consecutive data elements are replaced
        by one data value and a count.
*/

const encode = (string) => {
  const groups = string.match(/(\w)\1+/g)
  return groups.reduce((acc, curr) => (acc += `${curr.length}${curr[0]}`), '')
}

/* steps:
1. use match & regex to create array of grouped letters
2. iterate through array with reduce to ouput group length and single letter
*/

const decode = (string) => {}

console.log(encode('wwwiiuuuu')) // 3w2i4u
console.log(decode('2u3a4o')) // uuaaaoooo
