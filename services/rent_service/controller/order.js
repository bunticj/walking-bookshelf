const orderDoc = require('../model/order');
const mongoose = require('mongoose');
module.exports.makeOrder = (req, res, next) => {
    if (!req.body.book_id || !req.body.book_owner_id || !req.body.payload){
        res.status(400).send('Bad request');
    }

    const order = new orderDoc({
        _id: new mongoose.Types.ObjectId(),
        book_id: req.body.book_id,
        renter_id: req.body.payload._id,
        book_owner_id: req.body.book_owner_id,
        created_at: new Date().toISOString()
    });
    order.save().then(result => {
        res.status(201).json(result);
    }).catch(err => {
        res.status(500).send(err.message);
    });

}