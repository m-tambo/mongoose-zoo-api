'use strict';

const { Router } = require('express');
const router = Router();

const { getAnimals, addAnimal, updateAnimal, deleteAnimal, getOneAnimal } = require('../controllers/animalCtrl')
const { getKeepers, addKeeper, updateKeeper, deleteKeeper, getOneKeeper } = require('../controllers/keeperCtrl')

router.get('/animals', getAnimals)
router.post('/animal', addAnimal)
router.patch('/animal/:id', updateAnimal)
router.delete('/animal/:id', deleteAnimal)
router.get('/animal/:id', getOneAnimal)
router.get('/keepers', getKeepers)
router.post('/keeper', addKeeper)
router.patch('/keeper/:id', updateKeeper)
router.delete('/keeper/:id', deleteKeeper)
router.get('/keeper/:id', getOneKeeper)

router.use('/', (req, res) => { // main api page
  res.json({
    "animals": "",
    "add animal": "",
    "edit animal": "",
    "delete animal": "",
    "single animal": "",
    "keepers": "",
    "add keeper": "",
    "edit keeper": "",
    "delete keeper": "",
    "single keeper": ""
  })
})

module.exports = router
