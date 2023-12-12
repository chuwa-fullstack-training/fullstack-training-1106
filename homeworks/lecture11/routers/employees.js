const express = require('express');
const {
    createNewEmployee,
    getAnEmployee,
    updateAnEmployee,
    deleteAnEmployee,
    getAllEmployees,
    partial_getAllEmployees,
    getAllEmployeesByCompany,
    partial_getAnEmployee
} = require('../controllers/employee');
const router = express.Router();

router.get('/', auth, getAllEmployees);
router.get('/', partial_getAllEmployees);
router.get('/:id', auth, getAnEmployee);
router.get('/:id', partial_getAnEmployee)
router.get('/', auth, getAllEmployeesByCompany);

router.post('/', createNewEmployee);
router.put('/:id', updateAnEmployee);
router.delete('/:id', deleteAnEmployee);



module.exports = router;