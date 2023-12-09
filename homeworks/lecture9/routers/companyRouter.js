const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
    createNewCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getAllCompanies
} = require('../controllers/companyController');

//Create a new company
router.post('/company', createNewCompany);

//Get a company by id
router.get('/company/:id', getCompanyById);

//Update a company by id
router.post('/company/:id', updateCompanyById);

//Delete a company by id
router.delete('/company/:id' , deleteCompanyById);

//Get all companies
router.get('/company',getAllCompanies);

module.exports = router;