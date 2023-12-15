const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, req.params.dir);
    const extension = '.' + req.params.ext;

    fs.readdir(directory, (err, files) => {
        if (err) {
            res.status(500).send("Error reading directory");
            return;
        }

        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.send(filteredFiles.join('\n'));
    });
});

module.exports = router;
