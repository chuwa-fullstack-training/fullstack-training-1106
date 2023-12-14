const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');
// default route "/company"
// create a company
router.post('/', companyController.createCompany);
// get all companies
router.get('/', companyController.getAllCompanies);
// get company by id
router.get('/:id', companyController.getCompanyById);
// update company by id
router.put('/:id', companyController.updateCompanyById);
// delete company by id
router.delete('/:id', companyController.deleteCompanyById);
// get all employees of a company
router.get('/:id/employees', companyController.getAllEmployeesOfaCompany);

module.exports = router;