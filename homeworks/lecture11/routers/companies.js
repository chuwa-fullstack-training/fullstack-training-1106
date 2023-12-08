const express = require('express');
const {
    getAllCompanies,
    getOneCompany,
    createCompany,
    updateCompany,
    deleteCompany
} = require('../controllers/company');
const router = express.Router();

router.get('/companies', getAllCompanies);

router.get('/companies/:id', getOneCompany);

router.post('/companies', createCompany);

router.put('/companies/:id', updateCompany);

router.delete('/companies/:id', deleteCompany);

module.exports = router;    