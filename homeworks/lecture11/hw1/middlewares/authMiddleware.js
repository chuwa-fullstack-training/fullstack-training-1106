const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const token =
    req.header("auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1];

  // req.header { authorization: 'Bearer hureuiwe.bhuerer.duwwe' }

  // Check if token exists
  if (!token) {
    req.company = null;
    next();
  } else {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Add user from payload
      req.company = decoded.company;

      next();
    } catch (err) {
      res.status(401).json({ msg: "Token is not valid" });
    }
  }
};

module.exports = authMiddleware;
