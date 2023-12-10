const express = require("express");
const jwt = require("jsonwebtoken");
const Employee = require("../schemas/Employee");
const CustomAPIError = require('../errors');
const loginRouter = express.Router();

// /api/login
loginRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // use `firstName` as username and `lastName` as password
    let employee = await Employee.findOne({ firstName: username });

    if (!employee) {
      throw new CustomAPIError("Invalid Credentials, Username Not Exist", 400);
    }

    if (employee.lastName !== password) {
      return res
        .status(400)
        .json({ message: "Invalid Credentials, Wrong Password" });
    }

    const payload = {
      employee: {
        id: employee._id,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
});

module.exports = loginRouter;
