var express = require('express');
const { compareResult } = require('../controller/tokencontroller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.route('/hw2').get(compareResult);


module.exports = router;
