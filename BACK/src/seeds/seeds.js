require('dotenv').config()
const mongoose = require('mongoose')
const User = require('../api/models/user')
const Event = require('../api/models/event')
const { testUsers, testEvents } = require('../data/data')

const seedsCreator = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectado con BBDD')

    await User.collection.drop()
    await User.insertMany(testUsers)
    await Event.collection.drop()
    await Event.insertMany(testEvents)
    await mongoose.disconnect()
    console.log('Desconectado con BBDD')
  } catch (error) {
    console.error('Error en la conexión:', error.message)
    await mongoose.disconnect()
  }
}

seedsCreator()
