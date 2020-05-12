const express = require('express');
const router = express.Router()
const userRoutes = require('./user');
const bookRoutes = require('./book');

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
});

router.use(userRoutes);
router.use(bookRoutes);

module.exports = router