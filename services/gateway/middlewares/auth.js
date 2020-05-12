const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        //handle 'Bearer' key word
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        
        //payload available in routes to extract userId from token
        req.userData = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}
module.exports.signToken = (user) => {
   return jwt.sign({
        email: user.email,
        _id: user._id,
        user_role : user.user_type
    }, process.env.JWT_KEY, {
        expiresIn: 86400
    });

}  