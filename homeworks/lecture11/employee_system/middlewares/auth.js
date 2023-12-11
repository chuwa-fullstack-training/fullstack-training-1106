const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {

  // Get token from header
  const token =
    req.header('x-auth-token') ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  try {
    // Check if token exists
    if (!token) {
      throw new Error();
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Add user from payload
    // res.local.user = decoded.user;

    // redirect to login url 
    res.status(302).redirect(`/api/users/${decoded.user.id}${req.url}`);
  } catch (err) {
    // res.status(401).json({ msg: 'Token is not valid' });
    next();
  }
};
