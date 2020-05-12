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
    const bodyData = req.body;
    bodyData.owner_id = req.userData._id;
    sendRequest.post(url + req.path, bodyData,res);
})
module.exports = router;