const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

const PORT = 3000

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

// mongoose.connect("mongodb://localhost:27017/todoapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// var db = mongoose.connection;
// db.on("open", () => {
//   console.log("Connected to mongoDB");
// });
// db.on("error", error => {
//   console.log(error);
// });

// // import todo schema as model
// let todoModel = require("./todo_schema");

// ROUTES

// app.get('/', (req, res) => {
//   res.send('hello')
// })

// CRUD FUNCTIONS
// --------------

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
