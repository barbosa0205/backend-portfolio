const express = require('express')
const TechnologySchema = require('../models/technology')
//creando enrutador
const router = express.Router()

//obtener tecnologias
router.get('/technology', (req, res) => {
  let tec = TechnologySchema.findOne({
    _id: req.query.technology,
  })
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
