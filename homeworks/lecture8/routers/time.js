const express = require('express');
const router = express.Router();

router.get('/:time', (req, res) => {
  try {
    // parse time
    const date = new Date(req.query.iso);
    if (isNaN(date)) {
      throw new Error();
    }
    // send response
    if (req.params.time === 'parsetime') {
      res.json({
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds()
      });
    } else if (req.params.time === 'unixtime') {
      res.json({ unixtime: date.getTime() });
    } else {
      res.status(404).end('This is the 404 page');
    }
  } catch (error) {
    res.status(400).json({ error: 'wrong iso time' });
  }
});

router.get('*', (req, res) => {
  res.status(404).end('This is the 404 page');
});

module.exports = router;