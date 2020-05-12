const bookModel = require('../model/book');

module.exports.getBooks = (req, res, next) => {
    bookModel.books()
        .then(resolve => {
            console.log(resolve);
            res.status(200).send(JSON.stringify(resolve));
        })
        .catch(err => console.log(err));
}

module.exports.getSingleBook = (req, res, next) => {
    bookModel.singleBook(req.params.bookId)
        .then(resolve => {
            console.log(req.params.bookId);
            console.log(resolve);
            res.status(200).send(JSON.stringify(resolve));
        })
        .catch(err => console.log(err));
}