const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async (req, res, next) => {
  // Get token from header
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // Check if token exists
  if (!token) {
    //return res.status(401).json({ message: 'No token, authorization denied' });
    return next();
  }
  try {
    // Verify token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // Add user from payload
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
