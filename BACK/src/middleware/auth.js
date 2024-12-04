const { verifyToken } = require('../utils/verifyToken')

const isAuth = (req, res, next) => {
  verifyToken(req, res, next)
}

const isAdmin = (req, res, next) => {
  verifyToken(req, res, next, 'admin')
}
const canDo = (req, res, next) => {
  const user = req.user
  const { id } = req.params

  if (user.rol === 'admin' || user._id.toString() === id) {
    return next()
  } else {
    return res.status(400).json('No estás autorizado')
  }
}
module.exports = { isAdmin, isAuth, canDo }
