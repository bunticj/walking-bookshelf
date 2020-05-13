const express = require('express');
const sendRequest = require('./send_request')
const router = express.Router();
const authCheck = require('../middlewares/auth');
const url = 'http://localhost:4000'

router.get('/books',authCheck, (req, res) => {
 sendRequest.get(url+req.path, res);
});
router.get('/books/:bookId', authCheck, (req, res) => {
    sendRequest.get(url+req.path,res);
   });
   
router.post('/books',authCheck,(req,res) => {
    let bodyData = req.body;
    bodyData.payload = req.userData;
    sendRequest.post(url + req.path, bodyData,res);
});

router.patch('/books/:bookId', authCheck, (req,res)=> {
    let bodyData = req.body;
    bodyData.payload = req.userData;

    sendRequest.patch(url+req.path,bodyData,res);
});
module.exports = router;