const userModel = require('../model/user');

module.exports.getUsers = (req, res, next) => {
    userModel.users()
        .then(resolve => {
            console.log(resolve);
            res.status(200).send(JSON.stringify(resolve));
        }).catch(err => console.log(err));
}

module.exports.getSingleUser = (req,res,next)=>{
    
    userModel.singleUser(req.params.userId)
    .then(resolve => {
        console.log(req.params.userId);
        console.log(resolve);
        res.status(200).json(resolve);
    })
    .catch(err => console.log(err));
}

module.exports.addUser = (req,res,next)=>{
    userModel.newUser(req.body)
    .then(resolve => {
       
        res.status(201).json({
            message: 'User created',
            data: req.body
        });
    })
    .catch(err => console.log(err));
   
}
