const express = require('express');
const {
    createCompany,
    getOneCompany,
    updateCompany,
    deleteCompany,
    getAllCompanies
} = require('../controllers/company');

const router = express.Router();

router.post('/companies', createCompany);
router.get('/companies/:id', getOneCompany);
router.put('/companies/:id', updateCompany);
router.delete('/companies/:id', deleteCompany);
router.get('/companies', getAllCompanies);

module.exports = router;
