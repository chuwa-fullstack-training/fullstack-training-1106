const jwt = require('jsonwebtoken');
require('dotenv').config();


const authVerifier = async(req, res, next) => {
    const token = req.header('x-auth-token')||
                  req.headers?.authorization?.match(/^Bearer(.+)/)[1].trim();

    if(!token){
        req.auth = false;
        next();
        return;
    }else{
        req.auth = true;
    }
    try{
        const decoded = await jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).json({msg:'Token is invalid!'});
    }
}

module.exports = {auth: authVerifier};