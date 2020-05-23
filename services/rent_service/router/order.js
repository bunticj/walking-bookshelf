const express = require('express');
const router = express.Router();
const rentController = require('../controller/order');

router.post('/orders', rentController.makeOrder);

module.exports = router;