'use strict'

const mongoose = require('mongoose')

mongoose.Promise = Promise // links JS promise to mongoose promise

const animalSchema = { // name of model plus schema
  name: String,
  type: String,
  keeper: mongoose.Schema.Types.ObjectId,
  age: Number,
  likes: [String]
}

const keeperSchema = { // name of model plus schema
  name: String,
  age: Number,
  bio: String
}

const Animal = mongoose.model('Animal', animalSchema)
const Keeper = mongoose.model('Keeper', keeperSchema)

module.exports = { Animal, Keeper}
