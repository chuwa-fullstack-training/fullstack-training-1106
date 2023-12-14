var express = require('express');
var router = express.Router();
const companyController = require('../controllers/companyController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
