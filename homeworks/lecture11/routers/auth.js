const express = require("express");
const jwt = require("jsonwebtoken");
const { Employee } = require("../db/schema");

const router = express.Router();

router.post("/login", async (req, res, next) => {
    try {
        const { firstName, lastName } = req.body;

        let user = await Employee.findOne({ firstName, lastName });

        if (!user) {
            throw new CustomAPIError("Invalid Credentials", 400);
        }

        if (user.lastName !== lastName) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const payload = {
            user: {
                id: user._id,
            },
        };

        console.log('JWT Secret is: ', process.env.JWT_SECRET);
        const token = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });

        res.json({ token });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
