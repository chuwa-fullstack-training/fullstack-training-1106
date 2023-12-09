const jwt = require("jsonwebtoken");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env");

require("dotenv").config({ path: envPath });

module.exports = async (req, res, next) => {
  const token =
    req.header("x-auth-token") ||
    req.headers?.authorization?.match(/^Bearer (.+)/)[1].split(" ")[1];

  if (!token) {
    next();
    return;
  }
  try {
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.employee;
    next();
  } catch (error) {
    // console.log(error);
    res.status(401).json({ message: "Token is not valid" });
  }
};
