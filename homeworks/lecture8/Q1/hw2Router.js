const express = require('express');
const router = express.Router();
const url = require('url');

router.get('/parsetime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
  res.json(result);
});

router.get('/unixtime', (req, res) => {
  const iso = req.query.iso;
  const date = new Date(iso);
  const result = {
    unixtime: date.getTime(),
  };
  res.json(result);
});

module.exports = router;
