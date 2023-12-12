const express = require('express');
const router = express.Router();
const {
  getAllCompany,
  getOneCompany,
  createCompany,
  updateCompany,
  deleteCompany
} = require('../controllers/company');

// Get all companies
router.get('/', getAllCompany);

// Get a single company by ID
router.get('/:id', getOneCompany);

// Create a new company
router.post('/', createCompany);

// Update a company by ID
router.put('/:id', updateCompany);

// Delete a company by ID
router.delete('/:id', deleteCompany);

module.exports = router;
