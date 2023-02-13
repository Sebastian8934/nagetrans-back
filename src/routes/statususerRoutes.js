const express = require('express');
const router = express.Router();
const statusUserController = require('../controllers/statusUserController')

router
    .get('/',statusUserController.getStatusUser)
    .post('/',statusUserController.createStatusUser)
    .put('/:_id',statusUserController.putStatusUser)
    .delete('/:_id',statusUserController.deleteStatusUser)
    
module.exports = router;