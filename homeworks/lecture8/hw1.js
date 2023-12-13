/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const fs = require("fs");
const path = require("path");

const router1 = express.Router();
const router2 = express.Router();

// hw1
// this one passes parameters like `http://localhost:3000/hw1/test/txt` so I write into this, different from router2
router1.get('/:dirName/:fileExtension', (req, res) => {
    // get params
    const { dirName, fileExtension: file_extension } = req.params;
    const dir_name = path.join(__dirname, dirName);
    
    fs.readdir(dir_name, (err, files) => {
        if (err) {
            res.status(404).send(`Can not find directory: ${dirName}`);
        }
        else {
            console.log(`curr directory is: ${dir_name}`);
            res.json({ files: files.filter(file => path.extname(file).split('.')[1] === file_extension) });
        }
    })
})

// hw2
// from the request in hw7, we want to pass parameters like `http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z` which uses '?'
// so the way to fetch is different
router2.get('/parsetime', (req, res) => {
    const time = new Date(req.query.iso);
    res.json({ hour: time.getUTCHours(), minute: time.getMinutes(), second: time.getSeconds()});
})

router2.get('/unixtime', (req, res) => {
    const time = new Date(req.query.iso);
    res.json({ unixtime: time.getTime() });
})

module.exports = {
    router1,
    router2
};