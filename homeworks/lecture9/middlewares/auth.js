const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/customAPIError');

const jwt_secret = 'jwt_test';

const auth = async (req, res, next) =>{
    const token = 
        req.header('x-auth-token') ||
        req.headers?.authorization?.match(/^Bearer (.+)/)[1];
    
    if(!token){
        req.user = undefined;
        return next();
    }

    try{
        const decodedToken = jwt.verify(token, jwt_secret);

        req.user = decodedToken.user;
        next();
    }
    catch(e){
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = auth;