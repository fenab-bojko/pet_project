var express = require('express');
var UsersController = require('../controllers/getUsers.ts')
var router = express.Router();


/* GET home page. */
router.get('/', UsersController.getUsers);
router.post('/', UsersController.setUsers);

module.exports = router;