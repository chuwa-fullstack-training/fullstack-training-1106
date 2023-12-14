const express = require('express');
const {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee');
const auth = require( '../middleware/auth' );

const router = express.Router();

router.get('/', auth, getAllEmployees);

router.get('/:id', auth, getEmployee);
router.post('/', auth, createEmployee);
router.put('/:id', auth, updateEmployee);
router.delete('/:id', auth, deleteEmployee);

module.exports = router;