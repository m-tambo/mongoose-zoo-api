'use strict'
const { Keeper } = require('../models/models.js')

const getKeepers = (req, res, next) => {
  Keeper.find(function (err, keeper) {
    if (err) { // database error
        res.status(500).send(err)
    } else { // send the list of all keeper
        res.send(keeper)
    }
  })
}

const addKeeper = (req, res, next) => {
  Keeper
    .create(req.body)
    .then((data) => {
      res.json(data)
    })
}

const updateKeeper = (req, res, next) => {

}

const deleteKeeper = (req, res, next) => {

}

const getOneKeeper = (req, res, next) => {

}

module.exports = {
  getKeepers,
  addKeeper,
  updateKeeper,
  deleteKeeper,
  getOneKeeper
}
