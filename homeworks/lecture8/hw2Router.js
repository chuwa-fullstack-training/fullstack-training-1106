const express = require('express');
const router = express.Router();

router.get('/parsetime', (req, res) => {
    const isoTime = req.query.iso;

    if (!isoTime) {
        res.status(400).send('Bad Request: iso parameter is missing');
        return;
    }

    let date;
    try {
        date = new Date(isoTime);
    } catch (error) {
        res.status(400).send('Bad Request: invalid iso parameter');
        return;
    }

    const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    res.json(result);
});

router.get('/unixtime', (req, res) => {
    const isoTime = req.query.iso;

    if (!isoTime) {
        res.status(400).send('Bad Request: iso parameter is missing');
        return;
    }

    let date;
    try {
        date = new Date(isoTime);
    } catch (error) {
        res.status(400).send('Bad Request: invalid iso parameter');
        return;
    }

    const result = {
        unixtime: date.getTime()
    };

    res.json(result);
});

module.exports = router;
