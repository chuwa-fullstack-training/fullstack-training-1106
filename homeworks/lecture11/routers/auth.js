const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/Employee');
//const CustomAPIError = require('../errors');
const router = express.Router();

// /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    let user = await User.findOne({ firstName });

    if (!user) {
      throw new Error('Invalid Credentials', 400);
    }

    if (user.lastName !== lastName) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user._id,
        company: user.companyId 
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