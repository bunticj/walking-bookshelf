const UserDoc = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const sendRequest = require('../router/send_request');
const jwt = require('jsonwebtoken');

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
            //sign token
            const token = jwt.sign({
                email: user.email,
                _id: user._id,
                user_role : user.user_type
            }, process.env.JWT_KEY, {
                expiresIn: 86400
            });
            const url = 'http://localhost:4000/users'
            const userData = {};
            userData._id = user._id;
            userData.first_name = req.body.first_name;
            userData.last_name = req.body.last_name;
            userData.email = user.email;
            userData.user_role = user.user_type;
            userData.token = token;
            
            //re-route req
            sendRequest.post(url, userData,res);     
        });

    });
}