const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');
const CustomAPIError = require('../errors');
const loginR = express.Router();

// /auth/login
loginR.post('/login', async (req, res, next) => {
  try {
    const { username:firstName, password:lastName} = req.body;

    let employee = await Employee.findOne({ username });

    if (!employee) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (employee.password !== password) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
        employee: {
        id: employee._id
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = loginR;