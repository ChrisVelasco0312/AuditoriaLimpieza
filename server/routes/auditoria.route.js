const express = require('express')
const auditoriaRoute = express.Router()

// Auditoria model
let AuditoriaModel = require('../models/auditoria')

auditoriaRoute.route('/consultar').get((req, res) => {
  AuditoriaModel.find((error, data, next) => {
    if (error) {
      return next(error)
    } else {
      console.log(error)
      res.json(data)
    }
  })
})

// Registrar auditoria
auditoriaRoute.route('/registrar').post((req, res, next) => {
  AuditoriaModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

auditoriaRoute.route('/editar/:id').get((req, res) => {
  AuditoriaModel.findById(req.params.id, (error, data, next) => {
    if (error) {
      console.log(error)
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Actualizar auditoria
auditoriaRoute.route('/actualizar/:id').put((req, res, next) => {
  AuditoriaModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
        res.json(data)
        console.log('¡Auditoria actualizada exitosamente!')
      }
    }
  )
})

// Eliminar auditoria
auditoriaRoute.route('/eliminar/:id').delete((req, res, next) => {
  AuditoriaModel.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = auditoriaRoute

