const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        return res.status(400).send("Invalid URL");
    }
    const date = new Date(iso);
    const output = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.json(output);
});

router.get('/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        return res.status(400).send("Invalid URL");
    }
    const date = new Date(iso);
    res.json({ unixtime: date.getTime() });
});

module.exports = router;