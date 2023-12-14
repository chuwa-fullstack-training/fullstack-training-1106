const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();
const Employee = require('../models/employee');
// router.use(authenticateToken);
router.get('/',authenticateToken, async (req,res)=>{
    if (!req.user) {
        try {
            const data = await Employee.find().select('firstName lastName');
            res.json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } else {
        // console.log(req.user.id);
        try {
            const data = await Employee.find();
            res.json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
});

module.exports = router;