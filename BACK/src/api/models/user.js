const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    rol: {
      type: String,
      required: true,
      enum: ['admin', 'user'],
      default: 'user'
    },
    img: {
      type: String,
      default:
        'https://res.cloudinary.com/drs09rbjv/image/upload/v1725476562/_6b503771-5fe7-4a13-bb8d-206febfc6385_pqd93i.jpg'
    },
    confirmed: [{ type: mongoose.Types.ObjectId, ref: 'events' }]
  },
  { timestamps: true, collection: 'users' }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

userSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate()
  if (update.password) {
    update.password = bcrypt.hashSync(update.password, 10)
  }
  next()
})

const User = mongoose.model('users', userSchema, 'users')
module.exports = User
