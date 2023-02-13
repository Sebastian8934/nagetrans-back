const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/rolesController')

router
    .get('/',rolesController.getRole)
    .post('/',rolesController.createRole)
    .put('/:_id',rolesController.putRole)
    .delete('/:_id',rolesController.deleteRole)
    
module.exports = router;