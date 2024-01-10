const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const CustomAPIError = require('../errors');
const router = express.Router();

// /auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;

    let user = await User.findOne({ username });

    if (!user) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }

    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user._id
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
