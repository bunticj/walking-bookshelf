const UserDoc = require('../model/user');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const sendRequest = require('../router/send_request');
const signToken = require('../middlewares/auth').signToken;

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

            const token = signToken(user);
            const url = 'http://localhost:4000/users'
            const userData = {};
            userData._id = user._id;
            userData.first_name = req.body.first_name;
            userData.last_name = req.body.last_name;
            userData.email = user.email;
            userData.user_role = user.user_type;
            userData.token = token;
            
            //re-route request
            sendRequest.post(url, userData,res);     
        });

    });
}


//login user and retrieve token
module.exports.loginUser = (req, res, next) => {

    UserDoc.find({
            email: req.body.email
        })
        .exec()
        .then(user => {
            //user exist in DB
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }
            //compare plain pass with hashed in DB
            bcrypt.compare(req.body.password, user[0].password).then(result => {
                if (result) {
                    const token = signToken(user[0]);
                    return res.status(200).json({
                        message: 'Auth succesful',
                        token: token,

                    });
                }
                return res.status(401).json({
                    message: 'Auth failed'
                });
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}
