const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const CustomAPIError = require('../errors/customAPIError');

const jwt_secret = 'jwt_test';

router.get('/login', async (req, res, next)=>{
    try{
        const {firstName, password} = req.body;

        let user = await Employee.findOne({firstName});

        if(!user){
            throw new CustomAPIError('User does not exist!', 400);
            //res.status(404).json({message: 'User does not exist!'})
        }

        if(user.lastName !== password){
            throw new CustomAPIError('Password is wrong!', 400);
            //res.status(400).json({message: 'Password is wrong!'})
        }

        const payload = {
            user:{
                id: user._id,
                company: user.company
            }
        }

        const token = jwt.sign(payload, jwt_secret, {
            expiresIn: '30d'
        });

        res.status(200).json({token});
    }
    catch(e){
        next(e);
    }
});

module.exports = router;
