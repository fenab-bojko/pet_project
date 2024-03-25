var express = require('express');
var UsersController = require('../controllers/getUsers.ts');
var router = express.Router();

router.get('/', UsersController.ConrollerUser.getUsers);
router.post('/', UsersController.ConrollerUser.setUser);

module.exports = router;