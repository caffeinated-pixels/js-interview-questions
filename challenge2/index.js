// https://jsonplaceholder.typicode.com/users

/* 
CHALLENGE BRIEF: 
1. Call the JSONPlaceholder api (https://jsonplaceholder.typicode.com/users), get 10 users. 
2. Implement a functiongetUsers() that returns only names and emails of the users whose names 
contain the letter K.
*/

const getUsers = async () => {
  const api = 'https://jsonplaceholder.typicode.com/users'

  try {
    const response = await fetch(api)
    const users = await response.json()

    const onlyContainingK = users.filter((user) => /k/i.test(user.name))
    const namesAndEmailsOnly = onlyContainingK.map((user) => {
      return {
        name: user.name,
        email: user.email,
      }
    })

    console.log(namesAndEmailsOnly)
  } catch (err) {
    console.log(err)
  }
}
getUsers()

/* steps:
1. fetch users from API
2. filter users for name containing letter K - use regex & .test()
3. map through filtered array, return object for each containing only name & email
*/
