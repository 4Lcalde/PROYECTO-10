const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Conectado a BBDD')
  } catch (error) {
    console.log({ Error: error.message })
  }
}

module.exports = { connectDB }
