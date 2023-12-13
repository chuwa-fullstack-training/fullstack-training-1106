var express = require('express');
const { getFileList } = require('../controllers/hw71controller');
const { parseTime, unixTime } = require('../controllers/hw72controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.route('/hw1/:dir/:ext').get(getFileList);
router.route('/hw2/api/parsetime').get(parseTime);
router.route('/hw2/api/unixtime').get(unixTime);
module.exports = router;
