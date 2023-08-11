const express = require('express');
const router = express.Router();
const vegetableController = require('../controllers/vegetableController')
// or
// const { index,show } = require('../controllers/vegetableController')

// I.N.D.U.C.E.S (Index, New, Delete, Update, Create, Edit, Show)

router.get('/', vegetableController.index)

router.get('/new', vegetableController.newVegetable)

router.delete('/:indexOfVegetable', vegetableController.destroy)

router.put('/:indexOfVegetable', vegetableController.update)

router.post('/', vegetableController.create)

router.get('/:indexOfVegetable/edit', vegetableController.edit)

router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router;