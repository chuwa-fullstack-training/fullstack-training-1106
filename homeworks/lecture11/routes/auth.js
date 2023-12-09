const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { Employee } = require("../config/schema");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env");

require("dotenv").config({ path: envPath });

router.post("/login", async (req, res, next) => {
  try {
    const { firstName, lastName } = req.body;

    let user = await Employee.findOne({ firstName });
    if (!user) {
      next({ statusCode: 400, message: "Invalid Credentials" });
      return;
    }

    if (user.lastName !== lastName) {
      next({ statusCode: 400, message: "Invalid Credentials" });
      return;
    }

    const payload = {
      employee: {
        id: user._id,
      },
    };

    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    res.json({ token });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
