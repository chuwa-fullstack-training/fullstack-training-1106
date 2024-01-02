const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();


function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        // return res.sendStatus(401);
        next();
        return;
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        // if(err) return res.sendStatus(403);
        if(err){
            next();
            return;
        }
        req.user = user;
        next();
    })

}

router.post('/api/login',(req, res)=>{
    const { firstName, lastName, companyName } = req.body;
    
    if (!firstName || !lastName) {
        return res.status(400).json({
          status: 'error',
          message: 'Missing required fields: firstName or lastName',
        });
    }
    const user = { firstName, lastName, companyName};
    
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({accessToken: accessToken});
})

module.exports = {authenticateToken, router};