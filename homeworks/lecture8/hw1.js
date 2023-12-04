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
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const router = express.Router();
const router2 = express.Router();
app.use('/hw1', router);

router.get('/:dir(*)/:ext', (req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
   // console.log(dir);
   // path starting from the root directory
    const directoryPath = path.join('/', dir);
    //console.log(directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        if (err) throw err;  
        const matchingFiles = files.filter((file) => path.extname(file) === `.${ext}`);
        res.send(JSON.stringify(matchingFiles));
        }
    );
    });
    
app.use('/hw2', router2);
router2.get('/api/parsetime', (req, res) => {
    const iso = req.query.iso;
    const date = new Date(iso);
    res.send(JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }));
});
router2.get('/api/unixtime', (req, res) => {
    const iso = req.query.iso;
    const date = new Date(iso);
    res.send(JSON.stringify({
        unixtime: date.getTime()
    }));
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
