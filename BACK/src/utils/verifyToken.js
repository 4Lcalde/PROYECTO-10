const User = require('../api/models/user')
const { verifyJwt } = require('../config/jwt')

const verifyToken = async (req, res, next, roleRequired) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json('No estás autorizado')
    }

    const parsedToken = token.replace('Bearer ', '')
    const { id } = verifyJwt(parsedToken)
    const user = await User.findById(id)

    if (!user) {
      return res.status(401).json('No estás logueado')
    }

    user.password = null
    req.user = user

    if (roleRequired && user.rol !== roleRequired) {
      return res.status(403).json('No tienes permisos suficientes')
    }

    next()
  } catch (error) {
    return res.status(400).json('No estás autorizado')
  }
}

module.exports = { verifyToken }
