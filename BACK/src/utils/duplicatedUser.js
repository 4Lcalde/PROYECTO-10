const User = require('../api/models/user')
const mongoose = require('mongoose')

const duplicatedUser = async (UserDuplicated) => {
  console.log(UserDuplicated.email)

  const duplicatedUser = await User.findOne({ user: UserDuplicated.user })
  const duplicatedMail = await User.findOne({ email: UserDuplicated.email })

  if (duplicatedUser || duplicatedMail) {
    console.log('true')
  } else {
    console.log('no true')
  }
}

module.exports = duplicatedUser
