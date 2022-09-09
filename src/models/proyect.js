const mongoose = require('mongoose')

const proyectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  technologies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Technology' }],
  repo: {
    type: String,
    required: true,
  },
  web: {
    type: String,
    required: true,
  },
  shortDesc: {
    type: String,
    required: true,
  },
  longDesc: {
    type: String,
  },
  images: [{ type: String }],
})

module.exports = mongoose.model('Proyect', proyectSchema)
