const express = require('express');
const router = express.Router();
const typeController = require('../controllers/typeController')

router
    .get('/',typeController.getType)
    .post('/',typeController.createType)
    .put('/:_id',typeController.putType)
    .delete('/:_id',typeController.deleteType)
    
module.exports = router;