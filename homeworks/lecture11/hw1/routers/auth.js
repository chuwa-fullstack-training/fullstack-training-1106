const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
const CustomAPIError = require('../errors');

const {Employee:User} = require('../data/schema');

router.post('/login', async(req,res,next) => {
    try{
        const {username, password} = req.body;
        let user = await User.findOne({firstName:username});
        if(!user) throw new CustomAPIError('Invalid Credentials', 400);

        if(user.lastName !== password) return res.status(400).json({message: 'Username does not match with password!'});
        const payload = {
            user:{
                id: user._id
            }
        };
        const token = await jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIn: '30d'
        });
        res.json({token});
    }catch(err){
        next(err);
    }
});

module.exports = router;