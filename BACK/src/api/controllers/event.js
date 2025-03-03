const mongoose = require('mongoose')
const Event = require('../models/event')
const User = require('../models/user')
const { deleteFile } = require('../../utils/deleteFiles')

const getEvents = async (req, res, next) => {
  try {
    const events = await Event.find()
      .populate({ path: 'creator', select: '-password' })
      .populate({ path: 'assistants', select: '-password' })
    return res.status(200).json(events)
  } catch (error) {
    return res.status(400).json({
      Message: 'No se han podido obtener los eventos',
      Error: error.message
    })
  }
}

const getEventsById = async (req, res, next) => {
  try {
    const { id } = req.params
    const event = await Event.findById(id)
      .populate({ path: 'creator', select: '-password -email -rol' })
      .populate({ path: 'assistants', select: '-password -email -rol' })

    return res.status(200).json(event)
  } catch (error) {
    return res.status(400).json({
      Message: 'No se ha podido obtener el evento',
      Error: error.message
    })
  }
}

const postEvent = async (req, res, next) => {
  try {
    if (!req.body.event || !req.body.date || !req.body.description) {
      return res.status(400).json({
        Message: 'Nombre, fecha y descripción son necesarios'
      })
    }

    const newEvent = new Event(req.body)

    if (req.file) {
      newEvent.img = req.file.path
    }
    const event = await newEvent.save()

    return res.status(201).json(event)
  } catch (error) {
    return res.status(400).json({
      Message: 'No se ha podido publicar el evento',
      Error: error.message
    })
  }
}
const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params

    const oldEvent = await Event.findById(id)
    if (!oldEvent) {
      return res.status(404).json({ Message: 'Evento no encontrado' })
    }

    if (req.file) {
      deleteFile(oldEvent.img)
      req.body.img = req.file.path
    }

    req.body.assistants = req.body.assistants
      ? req.body.assistants.filter(
          (assistantId) => assistantId !== null && assistantId !== undefined
        )
      : oldEvent.assistants

    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    })

    return res.status(200).json(updatedEvent)
  } catch (error) {
    console.error('Error al actualizar el evento:', error)
    return res.status(400).json({
      Message: 'No se ha podido actualizar el evento',
      Error: error.message
    })
  }
}

const updateEventAssistants = async (req, res, next) => {
  try {
    const { id } = req.params

    const oldEvent = await Event.findById(id)

    if (!oldEvent) {
      return res.status(404).json({ Message: 'Evento no encontrado' })
    }

    const updatedAssistants = [...oldEvent.assistants, ...req.body.assistants]
    const EventUpdated = await Event.findByIdAndUpdate(
      id,
      { ...req.body, assistants: updatedAssistants },
      { new: true }
    )

    return res.status(200).json(EventUpdated)
  } catch (error) {
    console.error('Error al actualizar el evento:', error)
    return res.status(400).json({
      Message: 'No se ha podido actualizar el evento',
      Error: error.message
    })
  }
}

const removeAssistant = async (req, res, next) => {
  try {
    const { id } = req.params

    const event = await Event.findById(id)

    if (!event) {
      return res.status(404).json({ message: 'Evento no encontrado' })
    }
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { assistants: req.body.assistants },
      { new: true } // Devuelve el documento actualizado
    )

    return res
      .status(200)
      .json({ message: 'Evento actualizado', event: updatedEvent })
  } catch (error) {
    return res.status(400).json({
      Message: 'No se ha podido actualizar el evento',
      Error: error.message
    })
  }
}

const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedEvent = await Event.findByIdAndDelete(id)
    deleteFile(deletedEvent.img)
    return res
      .status(200)
      .json({ Message: 'Evento eliminado', event: deletedEvent })
  } catch (error) {
    return res.status(400).json({
      Message: 'No se ha podido eliminar el evento',
      Error: error.message
    })
  }
}

module.exports = {
  getEvents,
  getEventsById,
  postEvent,
  updateEvent,
  updateEventAssistants,
  removeAssistant,
  deleteEvent
}
