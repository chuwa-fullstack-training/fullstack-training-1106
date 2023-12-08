const express = require('express');
const Employee = require('../models/Employee');
const {
    getAllEmployees,
    getOneEmployee,
    getEmployeesByCompany,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee');
const auth = require('../middleware/auth');
const router = express.Router();

// const getEmployees = async (req, res) => {
//     try {
//         const companyId = req.user?.company;
//         const fieldsToReturn = ['firstName', 'lastName'];
//         const query = req.user ? Employee.find({companyId})
//                     :Employee.find().select(fieldsToReturn.join(' '));
//         const employees = await query.exec();
//         res.status(200).json(employees);
//        // return employees;
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ message: 'Server Error' });
//     }
//  };

router.get('/employees', auth, getAllEmployees);
   

router.get('/employees/:id',getOneEmployee);

router.get('/employees/companies/:id', auth, getEmployeesByCompany);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;
