var goodUsers = [
  { id: 1 },
  { id: 2 },
  { id: 3 }
]


var testAllValid = [
  { id: 2 },
  { id: 1 }
]



let checkUsersValid = (submittedUsers) => submittedUsers.every( submittedUser => goodUsers.some( goodUser => goodUser.id === submittedUser.id)  )
module.exports = checkUsersValid

console.log(checkUsersValid(testAllValid))




