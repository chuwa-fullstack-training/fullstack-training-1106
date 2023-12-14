const express = require('express');
const {
    getAllCompanies,
    getCompany,
    getAllEmployeeByCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company');

const router = express.Router();

router.get('/', getAllCompanies);

router.get('/:id', getCompany);
router.get('/employees/:id', getAllEmployeeByCompany);
router.post('/', createCompany);
router.put('/:id', updateCompany);
router.delete('/:id', deleteCompany);

module.exports = router;