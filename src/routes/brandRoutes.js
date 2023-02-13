const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController')

router
    .get('/',brandController.getBrand)
    .post('/',brandController.createBrand)
    .put('/:_id',brandController.putBrand)
    .delete('/:_id',brandController.deleteBrand)
    
module.exports = router;