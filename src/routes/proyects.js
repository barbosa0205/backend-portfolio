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
  try {
    const { query } = req

    if (query.searchBySkill) {
      let proyects = ProyectsSchema.find({
        technologies: query.searchBySkill,
      })
        .populate('technologies')
        .then((data) => {
          res.status(200).json({
            data,
          })
        })
        .catch((err) => {
          console.log('err', err)
          res.status(404).json({
            err,
          })
        })
    } else {
      let proyect = ProyectsSchema.findOne({ _id: query.id })
        .populate('technologies')
        .then((data) => {
          res.status(200).json({
            data,
          })
        })
        .catch((err) => {
          console.log('err', err)
          res.status(404).json({
            err,
          })
        })
    }
  } catch (error) {
    res.status(500).send('error interno del servidor')
  }
})

module.exports = router
