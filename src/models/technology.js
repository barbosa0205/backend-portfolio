const mongoose = require('mongoose')

const technologySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Technology', technologySchema)
