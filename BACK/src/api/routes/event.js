const { isAuth, canDoEvents } = require('../../middleware/auth')
const upload = require('../../middleware/cloudinary')
const {
  getEventsById,
  postEvent,
  updateEvent,
  deleteEvent,
  getEvents,
  updateEventAssistants,
  removeAssistant
} = require('../controllers/event')

const eventRouter = require('express').Router()

eventRouter.get('/', isAuth, getEvents)
eventRouter.get('/:id', isAuth, getEventsById)
eventRouter.post('/', isAuth, upload.single('img'), postEvent)
eventRouter.put('/:id', isAuth, canDoEvents, upload.single('img'), updateEvent)
eventRouter.put('/:id/assistants', isAuth, updateEventAssistants)
eventRouter.put('/:id/remove', isAuth, removeAssistant)
eventRouter.delete('/:id', isAuth, deleteEvent)

module.exports = eventRouter
