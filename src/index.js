const express = require('express')
const { createServer } = require('http')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const server = createServer(app)
require('dotenv').config()
const technologiesRoutes = require('./routes/technologies')
const proyectsRoutes = require('./routes/proyects')
const port = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI
app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST'],
  })
)

// middleware
app.use('/api', technologiesRoutes)

app.use('/api', proyectsRoutes)

// RUTAS
app.get('/', (req, res) => {
  res.send({
    success: true,
  })
})

// CONECCION MONGO
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connect to MongoDB')
  })
  .catch((err) => {
    console.log('error al conectarse', err)
  })

server.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})
