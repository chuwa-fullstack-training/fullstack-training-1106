const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
require('dotenv').config;

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const employee = await Employee.findOne({firstName: username});

        if(!employee){
            res.status(401).json({message: 'Invalid Credentials'});
        }else if (employee.lastName !== password){
            res.status(401).json({message: 'Invalid Credentials'});
        }

        const payload = {
            employee: {
                id: employee._id
            }
        };

        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1d'
        });

        res.json({token})
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = login;