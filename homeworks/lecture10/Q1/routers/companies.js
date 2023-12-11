const express = require('express');
const {
    createNewCompany,
    getACompany,
    updateACompany,
    deleteACompany,
    getAllCompanies
} = require('../controllers/company');
const router = express.Router();

router.get('/companies', getAllCompanies);
router.get('/companies/:id', getACompany);

router.post('/companies', createNewCompany);
router.put('/companies/:id', updateACompany);
router.delete('/companies/:id', deleteACompany);

module.exports = router;