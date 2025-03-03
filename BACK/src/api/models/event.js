const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema(
  {
    event: { type: String, required: true },
    date: { type: Date, required: true },
    place: { type: String, default: 'Online' },
    img: {
      type: String,
      default:
        'https://media.istockphoto.com/id/1212381977/es/vector/icono-de-calendario-de-dise%C3%B1o-plano-simple.jpg?s=612x612&w=0&k=20&c=rH2qnbNgiZIKp2fghqjhLUr7r97KTgCheIoVuFUmKEY='
    },
    //!poner el requerido despues
    creator: {
      type: mongoose.Types.ObjectId,
      ref: 'users'
    },
    assistants: [{ type: mongoose.Types.ObjectId, ref: 'users' }],
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'events'
  }
)

const Event = mongoose.model('events', eventSchema, 'Events')
module.exports = Event
