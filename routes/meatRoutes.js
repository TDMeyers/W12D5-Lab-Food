const express = require('express');
const router = express.Router();
const meatController = require('../controllers/meatController')
// or
// const { index,show } = require('../controllers/meatController')

// I.N.D.U.C.E.S (Index, New, Delete, Update, Create, Edit, Show)

router.get('/', meatController.index)

router.get('/new', meatController.newMeat)

router.delete('/:indexOfMeat', meatController.destroy)

router.put('/:indexOfMeat', meatController.update)

router.post('/', meatController.create)

router.get('/:indexOfMeat/edit', meatController.edit)

router.get('/:indexOfMeat', meatController.show)

module.exports = router;