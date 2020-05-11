const UserDoc = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const sendRequest = require('../router/send_request');

module.exports.addUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        const user = new UserDoc({
            _id: new mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash,
            created_at: new Date().toISOString()
        });
        user.save(err => {
            if (err) {
                throw new Error('Unable to save user');
            }
            const userData = {};
            userData._id = user._id;
            userData.first_name = req.body.first_name;
            userData.last_name = req.body.last_name;
            const url = 'http://localhost:4000/users'

            sendRequest.post(url, userData,res);
                        
        });

    });
}