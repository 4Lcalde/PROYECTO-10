const { isAuth, canDo } = require('../../middleware/auth')
const upload = require('../../middleware/cloudinary')
const {
  getUsers,
  login,
  register,
  getUsersbyId,
  updateUser,
  deleteUser
} = require('../controllers/user')

const userRoutes = require('express').Router()

userRoutes.get('/', isAuth, getUsers)
userRoutes.get('/:id', isAuth, getUsersbyId)
userRoutes.post('/login', login)
userRoutes.post('/register', upload.single('img'), register)
userRoutes.put('/:id', isAuth, canDo, upload.single('img'), updateUser)
userRoutes.delete('/:id', isAuth, canDo, deleteUser)

module.exports = userRoutes
