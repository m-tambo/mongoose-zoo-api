const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes')

app.use(function(req, res, next) { // to deal with cross-origin issues
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST,HEAD, OPTIONS,PUT, DELETE, PATCH")
  next()
})

app.use(json()) // converts any req.body to json, via body-parser

app.use('/api', routes)

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/mongoose-zoo'
const PORT = process.env.PORT || 3030

mongoose.connect(MONGODB_URL)  // makes certain we are connected to the mongoDB before listening to calls
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Hey, I'm listening on port ${PORT}`)
    })
  })
  .catch(console.error)
