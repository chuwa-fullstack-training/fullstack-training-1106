const jwt = require("jsonwebtoken");
const User = require("../models/employee");

const handleLogin = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    const userExist = await User.findOne({ firstName });
    if (!userExist) {
      throw new Error("Invalid Credentials");
    }
    if (userExist.lastName != lastName) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }
    const payload = {
      company: userExist.company,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

module.exports = handleLogin;
