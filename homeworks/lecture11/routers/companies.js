const express = require('express');
const {
    createNewCompany,
    getACompany,
    updateACompany,
    deleteACompany,
    getAllCompanies
} = require('../controllers/company');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', getAllCompanies);
router.get('/:id', getACompany);

router.post('/', createNewCompany);
router.put('/:id', updateACompany);
router.delete('/:id', deleteACompany);

module.exports = router;