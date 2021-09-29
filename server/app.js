const express = require('express')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const database = require('./database')

const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

//Connection to database
mongoose.Promise = global.Promise
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Database connected')
    },
    (error) => {
      console.log("Database could't be connected to: " + error)
    }
  )

const auditoriaAPI = require('./routes/auditoria.route')

app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(cors())

//API
app.use('/api', auditoriaAPI)

//Create port
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

//Find error 404
app.use((req, res, next) => {
  next(createError(404))
})
