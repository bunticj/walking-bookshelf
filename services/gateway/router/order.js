const express = require('express');
const sendRequest = require('./send_request')
const router = express.Router();
const authCheck = require('../middlewares/auth');
const url = 'http://localhost:4001';


   router.get('/orders', (req,res) => {
       res.send('nestp');
   });
router.post('/orders',authCheck,(req,res) => {
    let bodyData = req.body;
    bodyData.payload = req.userData;
    sendRequest.post(url + req.path, bodyData,res);
});

module.exports = router;