const express = require('express')
const TechnologySchema = require('../models/technology')
//creando enrutador
const router = express.Router()

//obtener tecnologias
router.get('/technologies', (req, res) => {
  let tecs = TechnologySchema.find({})
    .then((data) => {
      res.json({
        data,
      })
    })
    .catch((err) => {
      console.log('err', err)
      res.json({
        err,
      })
    })
})

module.exports = router
