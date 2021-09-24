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
      type: Boolean,
    },
    camilla: {
      type: Boolean,
    },
    escritorio: {
      type: Boolean,
    },
    lavamanos: {
      type: Boolean,
    },
    soporte: {
      type: Boolean,
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
