const { generateSign } = require('../../config/jwt')
const { deleteFile } = require('../../utils/deleteFiles')
const duplicatedUser = require('../../utils/duplicatedUser')
const User = require('../models/user')
const bcrypt = require('bcrypt')

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find()
      .select('-password -email -rol')
      .populate('confirmed')
    return res.status(200).json(users)
  } catch (error) {
    return res.status(400).json({
      Message: 'No se han podido obtener los usuarios',
      Error: error.message
    })
  }
}

const getUsersbyId = async (req, res, nexts) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
      .select('-password -rol')
      .populate('confirmed')
    return res.status(200).json(user)
  } catch (error) {
    return res.status(400).json({ Error: error.message })
  }
}

const register = async (req, res, next) => {
  try {
    const newUser = new User({
      user: req.body.user,
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      img: req.file ? req.file.path : undefined,
      rol: 'user'
    })

    const duplicatedUser = await User.findOne({
      $or: [{ user: req.body.user }, { email: req.body.email }]
    })

    if (duplicatedUser) {
      if (
        duplicatedUser.user === newUser.user &&
        duplicatedUser.email === newUser.email
      ) {
        return res.status(400).json({ Message: 'Usuario ya registrado' })
      } else if (duplicatedUser.email === newUser.email) {
        return res.status(400).json({ Message: 'Email en uso' })
      } else if (duplicatedUser.user === newUser.user) {
        return res.status(400).json({ Message: 'Usuario en uso' })
      }
    }

    const userSaved = await newUser.save()
    return res
      .status(201)
      .json({ Message: 'Registro correcto', user: userSaved })
  } catch (error) {
    return res.status(400).json({ Message: error.message })
  }
}

const login = async (req, res, next) => {
  try {
    const { user, password } = req.body

    const userLog = await User.findOne({
      $or: [{ user: user }, { email: user }]
    })

    if (!userLog) {
      return res
        .status(400)
        .json({ Message: 'Este usuario o correo no existe.' })
    }

    if (bcrypt.compareSync(password, userLog.password)) {
      const token = generateSign(userLog._id)

      return res.status(200).json({ userLog, token })
    } else {
      return res.status(400).json({ Message: 'La contraseña es errónea' })
    }
  } catch (error) {
    return res.status(400).json({ Message: error.message })
  }
}

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const newUser = req.body

    const duplicatedUser = await User.findOne({
      $or: [{ user: req.body.user }, { email: req.body.email }]
    })

    if (duplicatedUser && duplicatedUser._id.toString() !== id) {
      if (
        duplicatedUser.user === newUser.user &&
        duplicatedUser.email === newUser.email
      ) {
        return res
          .status(400)
          .json({ Message: 'Usuario y email ya registrado' })
      } else if (duplicatedUser.email === newUser.email) {
        return res.status(400).json({ Message: 'Email en uso' })
      } else if (duplicatedUser.user === newUser.user) {
        return res.status(400).json({ Message: 'Usuario en uso' })
      }
    }

    const oldUser = await User.findById(id)
    if (!oldUser) {
      return res.status(404).json('Usuario inexistente')
    }

    if (req.file) {
      deleteFile(oldUser.img)
      req.body.img = req.file.path
    }

    if (Array.isArray(req.body.confirmed)) {
      if (req.body.confirmed.length > 0) {
        const duplicatedConfirmed = req.body.confirmed.some((eventId) =>
          oldUser.confirmed.includes(eventId)
        )

        if (duplicatedConfirmed) {
          return res.status(400).json('Ya asistes a este evento')
        }

        req.body.confirmed = [
          ...new Set([...oldUser.confirmed, ...req.body.confirmed])
        ]
      } else {
        req.body.confirmed = []
      }
    } else {
      req.body.confirmed = oldUser.confirmed
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })

    return res.status(200).json(updatedUser)
  } catch (error) {
    return res.status(400).json({ Message: error.message })
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedUser = await User.findByIdAndDelete(id)
    deleteFile(deletedUser.img)
    return res
      .status(200)
      .json({ Message: 'Usuario eliminado', user: deletedUser })
  } catch (error) {
    return res.status(400).json({ Message: error.message })
  }
}

module.exports = {
  getUsers,
  getUsersbyId,
  updateUser,
  register,
  login,
  deleteUser
}
