const express = require('express');
const sendRequest = require('./send_request')
const router = express.Router();
const user_control = require('../controller/user');
const url = 'http://localhost:4000'

router.get('/users', (req, res) => {
 sendRequest.get(url+req.path,res);
});

router.post('/register',user_control.addUser);


module.exports = router;