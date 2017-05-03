'use strict'
const { Animal } = require('../models/models.js')

const getAnimals = (req, res, next) => {
  Animal.find(function (err, animals) {
    if (err) { // database error
        res.status(500).send(err)
    } else { // send the list of all animals
        res.send(animals)
    }
  })
}

const addAnimal = (req, res, next) => {
  Animal
    .create(req.body)
    .then((data) => {
      res.json(data)
    })
}

const updateAnimal = (req, res, next) => {

}

const deleteAnimal = (req, res, next) => {

}

const getOneAnimal = (req, res, next) => {

}

module.exports = {
  getAnimals,
  addAnimal,
  updateAnimal,
  deleteAnimal,
  getOneAnimal
}
