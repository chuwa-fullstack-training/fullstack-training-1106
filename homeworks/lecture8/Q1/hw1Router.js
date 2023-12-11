// hw1Router.js

const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:dir/:ext', (req, res) => {
  const { dir, ext } = req.params;
  const dirPath = path.join(__dirname, dir);

  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const filteredFiles = files.filter(file => path.extname(file) === `.${ext}`);
      if (filteredFiles.length === 0) {
        res.status(404).send('No files found');
      } else {
        res.json(filteredFiles);
      }
    }
  });
});

module.exports = router;
