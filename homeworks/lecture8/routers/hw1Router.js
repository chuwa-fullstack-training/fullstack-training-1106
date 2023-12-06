const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    const extension = '.' + ext;
    const dir_path = path.join(__dirname, dir);
    console.log("dir_path: ", dir_path);
    fs.readdir(dir_path, (err, files) => {
        if (err) {
            return res.status(500).send("Wrong directory");
        }
        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.send(filteredFiles.join('\n'));
    });
});

module.exports = router;