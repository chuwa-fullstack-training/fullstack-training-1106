const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();
const Company = require('../models/company');
const Employee = require('../models/employee');

router.use(authenticateToken);

router.get('/', async (req, res) => {
    if (!req.user) {
        // 401 Unauthorized
        res.status(401).json({ message: "Unauthorized" });
    } else {
        try {
            const employee = await Employee.findById(req.user.id).populate('company');
            if (!employee || !employee.company) {
                res.status(404).json({ message: "Employee or company not found" });
            } else {
                const companyId = employee.company._id;
                const employees = await Employee.find({ company: companyId }).populate('company');
                res.json(employees);
            }
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
});

module.exports = router;
