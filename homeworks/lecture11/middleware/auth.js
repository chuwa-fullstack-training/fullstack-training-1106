const jwt = require('jsonwebtoken');
const Employee = require('../models/Employee');

module.exports = async (req, res, next) => {
  // Get token from header
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }
 
  try {
    if (token) {
      // Verify the token if it exists
      const decoded = jwt.verify(token, process.env.JWT_SECRET); 
      req.user = decoded.user;
      
    } else {
      // If no token is present, set req.user to null or any other value
      req.user = null;
    }

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token.' });
  }
};