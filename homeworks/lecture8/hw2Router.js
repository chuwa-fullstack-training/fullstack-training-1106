const express = require('express');
const router = express.Router();

router.get('/api/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (iso) {
        const date = new Date(iso);
        let UTCTimes = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds()
        };
        res.send(UTCTimes);
    }
    else{
        res.status(404).send('404 Not Found');
    }
})

router.get('/api/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (iso) {
        const date = new Date(iso);
        let UnixTimes = {
            unixtime: date.getTime()
        }
        res.send(UnixTimes);
    }
    else{
        res.status(404).send('404 Not Found');
    }
})

module.exports = router;