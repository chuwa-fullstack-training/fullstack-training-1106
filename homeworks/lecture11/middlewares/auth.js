const jwt = require('jsonwebtoken');
require('dotenv').config;

module.exports = async (req, res, next) => {
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.employee = decoded.employee;
    req.isAuth = true;
    next();
  } catch (err) {
    req.isAuth = false;
    next();
  }
};