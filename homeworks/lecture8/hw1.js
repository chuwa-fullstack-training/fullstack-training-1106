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

// hw1
const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();
const PORT = 3000;

const router1 = express.Router();

router1.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, req.params.dir);
    const extension = req.params.ext;

    fs.readdir(directory, (err, files) => {
        if(err) {
            console.log(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        const filteredFiles = files.filter(file => path.extname(file) === `.${extension}`)
    
        if(filteredFiles.length === 0){
            res.send('No file with this extension!');
            return;
        }
    
        res.send(filteredFiles.join('\n'));
    });
})

app.use('/hw1', router1);

app.listen(PORT, () => {
    console.log(`Express.js server is running on port ${PORT}`)
})

/**
 * test: http://localhost:3000/hw1/testFolder/js
 * output: test.js test2.js
 * 
 * test: http://localhost:3000/hw1/testFolder/txt
 * output: No file with this extension!
 * 
 */




// hw2
const url = require('url');
function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    return {
        unixtime: time.getTime()
    }
}

const router2 = express.Router();
router2.get('/parsetime', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const time = new Date(parsedUrl.query.iso);
    const result = parsetime(time);
    res.send(result);
})

router2.get('/unixtime', (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const time = new Date(parsedUrl.query.iso);
    const result = unixtime(time);
    res.send(result);
})

app.use('/api', router2);


/**
 * test: http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z
 * output:
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * 
 * test2: http://localhost:3000/api/unixtime?iso=2023-05-22T12:34:56.789Z
 * output:
 * { "unixtime": 1684758896789 }
 *
 */