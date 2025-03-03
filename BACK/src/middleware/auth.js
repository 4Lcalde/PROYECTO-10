const Event = require('../api/models/event')
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

const canDoEvents = async (req, res, next) => {
  try {
    const user = req.user
    const { id } = req.params

    // Buscar el evento por su ID
    const event = await Event.findById(id)

    // Verificar si el evento existe
    if (!event) {
      return res.status(404).json({ Message: 'Evento no encontrado' })
    }

    // Comprobar si el usuario es admin o el creador del evento
    if (
      user.rol === 'admin' ||
      event.creator.toString() === user._id.toString()
    ) {
      return next()
    } else {
      return res.status(403).json({
        Message: 'No estás autorizado para modificar o eliminar este evento'
      })
    }
  } catch (error) {
    console.error('No estás autorizado para esta acción') // Mensaje en consola
    return res.status(500).json({ Message: 'Error interno del servidor' })
  }
}

module.exports = { isAdmin, isAuth, canDo, canDoEvents }
