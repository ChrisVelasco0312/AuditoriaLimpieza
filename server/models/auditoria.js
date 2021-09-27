const mongoose = require('mongoose')
const Schema = mongoose.Schema

let auditorSchema = new Schema(
  {
    nombreAuditor: {
      type: String,
    },
    sede: {
      type: String,
    },
    aseador: {
      type: String,
    },

    fecha: {
      type: String,
    },
    silla: {
      type: String,
    },
    camilla: {
      type: String,
    },
    escritorio: {
      type: String,
    },
    lavamanos: {
      type: String,
    },
    soporte: {
      type: String,
    },
    porcentajeSucio: {
      type: Number,
    },
    porcentajeLimpio: {
      type: Number,
    },
  },
  {
    collection: 'auditorias',
  }
)

module.exports = mongoose.model('Auditoria', auditorSchema)
