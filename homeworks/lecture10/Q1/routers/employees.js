const express = require('express');
const {
    createNewEmployee,
    getAnEmployee,
    updateAnEmployee,
    deleteAnEmployee,
    getAllEmployees,
    getAllEmployeesByCompany
} = require('../controllers/employee');
const router = express.Router();

router.get('/employees', getAllEmployees);
router.get('/employees/:id', getAnEmployee);
router.get('/companies/:id/employees', getAllEmployeesByCompany);

router.post('/employees', createNewEmployee);
router.put('/employees/:id', updateAnEmployee);
router.delete('/employees/:id', deleteAnEmployee);



module.exports = router;