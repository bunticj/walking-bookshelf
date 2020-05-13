const express = require('express');
const router = express.Router();
const bookController = require('../controller/book');

router.get('/books', bookController.getBooks);
router.get('/books/:bookId', bookController.getSingleBook);
router.post('/books', bookController.addBook);
router.patch('/books/:bookId', bookController.patchBook);
module.exports = router;