const express = require('express')
const { json } = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const routes = require('./routes')

app.use(json()) // converts any req.body to json, via body-parser

mongoose.Promise = Promise // links JS promise to mongoose promise

app.use('/api', routes)

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/mongoose-zoo'
const PORT = process.env.PORT || 3030

mongoose.connect(MONGODB_URL)  // makes certain we are connected to the mongoDB before listening to calls
  .then(() => {
    app.listen(PORT, () => {
    console.log(`Hey, I'm listening on port ${PORT}`);
    })
  })
  .catch(console.error)
