const express = require('express');
const router = express.Router();
const userController = require('../controller/user_control');

router.get('/users', userController.getUsers);
router.get('/users/:userId',userController.getSingleUser);
router.post('/users', userController.addUser);
module.exports = router;