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
module.exports.addBook = (req, res, next) => {
    console.log(req.body);
    bookModel.newBook(req.body)
        .then(resolve => {
            res.status(201).json({
                message: 'Book created',
                data: req.body
            });
        })
        .catch(err => console.log(err));

}

module.exports.patchBook = (req, res, next) => {
    bookModel.singleBook(req.params.bookId)
        .then(resolve => {
            const singleBookObj = resolve[0];
           console.log(singleBookObj.owner_id, req.body.payload._id);
            if (singleBookObj.owner_id.toString() === req.body.payload._id.toString()) {
                bookModel.updateBook(req.body, req.params.bookId)
                    .then(result => {
                        console.log(result);
                        res.status(200).json(result)
                    })
                    .catch(err => console.log(err));
               
            } else {
                console.log('nije prosao uvjet');
                res.status(403).send('You are not authorized to update this book');
            }

        }).catch(err => console.log(err));
}