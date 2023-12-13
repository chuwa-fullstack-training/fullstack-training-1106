const express = require('express');
const {
  createcompany,
  create,
  getcompany,
  getallcompanies,
  deletecompany,
  updatecompany
} = require('../controllers/companies');

const router = express.Router();

router.post('/createcompany', createcompany);

router.get('/getcompany/:id', getcompany);

router.get('/getallcompanies', getallcompanies);

router.delete('/deletecompany/:id', deletecompany);

router.put('/updatecompany/:id', updatecompany);

module.exports = router;