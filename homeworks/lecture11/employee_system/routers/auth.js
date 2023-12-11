const express = require('express');
const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');
const router = express.Router();

// /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { username: firstName, password: lastName } = req.body;

    // verify user
    let user = await Employee.findOne({ firstName });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }
    if (user.lastName !== lastName) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // set jsonwebtoken
    const payload = {
      user: {
        id: user._id
      }
    };
    
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    });

    // res.cookie('jwt', token);

    // login to user page
    // res.status(302).redirect('/api/employees');
    res.json({ token })
  } catch (err) {
    next(err);
  }
});

module.exports = router;
