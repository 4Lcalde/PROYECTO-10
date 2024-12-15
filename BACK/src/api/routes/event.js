const { isAuth, canDo } = require('../../middleware/auth')
const upload = require('../../middleware/cloudinary')
const {
  getEventsById,
  postEvent,
  updateEvent,
  deleteEvent,
  getEvents
} = require('../controllers/event')

const eventRouter = require('express').Router()

eventRouter.get('/', isAuth, getEvents)
eventRouter.get('/:id', isAuth, getEventsById)
eventRouter.post('/', isAuth, upload.single('img'), postEvent)
eventRouter.put('/:id', isAuth, upload.single('img'), updateEvent)
eventRouter.delete('/:id', isAuth, deleteEvent)

module.exports = eventRouter
