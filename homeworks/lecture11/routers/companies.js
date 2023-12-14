const express = require('express');
const {
    getAllCompanies,
    getCompany,
    getAllEmployeeByCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company');
const auth = require( '../middleware/auth' );

const router = express.Router();

router.get('/', auth, getAllCompanies);

router.get('/:id', auth, getCompany);
router.get('/employees/:id', auth, getAllEmployeeByCompany);
router.post('/', auth, createCompany);
router.put('/:id', auth, updateCompany);
router.delete('/:id', auth, deleteCompany);

module.exports = router;