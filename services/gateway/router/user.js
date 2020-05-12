const express = require('express');
const sendRequest = require('./send_request')
const router = express.Router();
const user_control = require('../controller/user');
const validator = require('../middlewares/validate');
const authCheck = require('../middlewares/auth');
const url = 'http://localhost:4000'

router.get('/users',authCheck, (req, res) => {
 sendRequest.get(url+req.path,res);
});
router.get('/users/:userId', (req, res) => {
    sendRequest.get(url+req.path,res);
   });
   
router.post('/register',validator.userValidation(),validator.validate,user_control.addUser);


module.exports = router;