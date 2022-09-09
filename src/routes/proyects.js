const express = require('express')
const ProyectsSchema = require('../models/proyect')
//creando enrutador
const router = express.Router()

//obtener tecnologias
router.get('/proyects', (req, res) => {
  let proyects = ProyectsSchema.find({})
    .populate('technologies')
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

//obtener tecnologias
router.get('/proyect', (req, res) => {
  const { query } = req
  let proyect = ProyectsSchema.findOne({ _id: query.id })
    .populate('technologies')
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
