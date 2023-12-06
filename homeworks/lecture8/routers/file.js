const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
  const dir = __dirname + '/' + req.params.dir;
  const ext = '.' + req.params.ext;
  // read files from dir
  fs.readdir(dir, (err, files) => {
    if (err) {
      res.status(400).send(err.message);
    } else {
      files.forEach(file => {
        if (path.extname(file) === ext) {
          res.write(file + '\n');
        }
      });
    }
    res.end();
  });
});

router.get('*', (req, res) => {
  res.status(404).end('This is the 404 page');
});

module.exports = router;