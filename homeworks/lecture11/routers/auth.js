const express = require('express');
const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors');
const Employee = require('../models/employee');
const router = express.Router();

// /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    let employee = await Employee.findOne({ firstName });

    if (!employee) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (user.lastName !== lastName) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      employee: {
        id: employee._id
      }
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d'
    });
    res.json({ token });
    
  } catch (err) {
    next(err);
  }
});

module.exports = router;
