require('dotenv').config()

const express = require('express')
const { connectDB } = require('./src/config/db')
const cors = require('cors')
const userRoutes = require('./src/api/routes/user')
const eventRouter = require('./src/api/routes/event')
const { configCloudinary } = require('./src/config/cloudinary')

const app = express()
app.use(express.json({ limit: '50mb' }))
app.use(cors())
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000')
})
connectDB()
configCloudinary()

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/events', eventRouter)
app.use('*', (req, res, next) => {
  return res.status(404).send(`
    <div class="error">
       <img
    src="https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2011/06/10/2FFABB1E-ADEA-4746-86B4-675FB850B740/98.jpg?crop=1000,563,x0,y344&width=1900&height=1069&optimize=low&format=webply"
    style="width: 300px;"
    alt="Error Image"
  />
      <h1>Page not found</h1>
    </div>
  `)
})
