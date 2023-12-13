const parseTime = (req, res) => {
    const isoTime = req.query.iso;
    const date = new Date(isoTime);

    res.json({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    });
};

const unixTime = (req, res) => {
    const isoTime = req.query.iso;
    const date = new Date(isoTime);

    res.json({
        unixtime: date.getTime()
    });
}

module.exports = {
    parseTime,
    unixTime
};