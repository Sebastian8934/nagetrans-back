const express = require('express');
const router = express.Router();
const modelController = require('../controllers/modelController')

router
    .get('/',modelController.getModel)
    .post('/',modelController.createModel)
    .put('/:_id',modelController.putModel)
    .delete('/:_id',modelController.deleteModel)
    
module.exports = router;