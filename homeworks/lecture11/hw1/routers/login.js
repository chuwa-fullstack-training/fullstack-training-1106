const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const router = express.Router();

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let employee = await Employee.findOne({ firstName: username });

    if (!employee) {
        return res.status(400).json({ message: 'Invalid Credentials' });;
    }

    if (employee.lastName !== password) {
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

module.exports = router;
