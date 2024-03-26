var express = require('express');
var UsersController = require('../controllers/getUsers.ts');
var router = express.Router();

router.get('/', UsersController.getUsers);
router.post('/', UsersController.setUsers);

module.exports = router;