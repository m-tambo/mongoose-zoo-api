'use strict';

const { Router } = require('express');
const router = Router();

const { addAnimal, getAnimals, getOneAnimal, updateAnimal, deleteAnimal } = require('../controllers/animalCtrl')
const { addKeeper, getKeepers, getOneKeeper, updateKeeper, deleteKeeper } = require('../controllers/keeperCtrl')

router.use('/', function(req, res) { // main api page
  res.json({
    "animals": "",
    "single animal": "",
    "add animal": "",
    "edit animal": "",
    "delete animal": "",
    "keepers": "",
    "single keeper": "",
    "add keeper": "",
    "edit keeper": "",
    "delete keeper": ""
  })
})

router.get('/animals', getAnimals)
router.get('/animal/:id', getOneAnimal)
router.post('/animal', addAnimal)
router.patch('/animal/:id', updateAnimal)
router.delete('/animal/:id', deleteAnimal)
router.get('/keepers', getKeepers)
router.get('/keeper/:id', getOneKeeper)
router.post('/keeper', addKeeper)
router.patch('/keeper/:id', updateKeeper)
router.delete('/keeper/:id', deleteKeeper)
