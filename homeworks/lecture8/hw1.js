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

// lecture7 hw1 in Express.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

const router1 = express.Router();
// Handle /hw1/<dir>/<ext> requests
router1.get('/hw1/:dir/:ext', (req, res) => {
    // Retrieve parameters from the URL
    const extension = '.' + req.params.ext;
    const directory = path.join(__dirname, req.params.dir);
    // Read the directory
    fs.readdir(directory, (err, files) => {
        if (err) {
          res.status(404).send('404: Resource Not Found. Please follow localhost:3000/hw1/<dir>/<ext>');
          return;
        }
        // Filter files with the specified extension and send the response
        res.send(files.filter(file => path.extname(file) === extension));
    });
});
// Use the router1 in the app
app.use('/', router1);

// lecture7 hw2 in Express.js
const router2 = express.Router();
// Handle /api/parsetime requests
router2.get('/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (iso) {
        const date = new Date(iso);
        const timeObj = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
        res.status(200).json(timeObj);
    } else {
        res.status(400).send("Bad Request: Query parameter 'iso' is required.");
    }
});
// Handle /api/unixtime requests
router2.get('/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (iso) {
        const timeObj = { unixtime: new Date(iso).getTime() };
        res.status(200).json(timeObj);
    } else {
        res.status(400).send("Bad Request: Query parameter 'iso' is required.");
    }
});
// Use the router2 in the app
app.use('/api', router2);
// Start the server
app.listen(port, () => console.log(`Server running on local port: ${port}`));