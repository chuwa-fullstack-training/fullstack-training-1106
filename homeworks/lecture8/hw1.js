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

// Routers
const hw1Router = express.Router();
const hw2Router = express.Router();

app.use('/hw1', hw1Router);
app.use('/api', hw2Router);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

hw1Router.get('/:dir/:ext', (req, res) => {
    const directory = path.join(__dirname, req.params.dir);
    const extension = '.' + req.params.ext;

    fs.readdir(directory, (err, files) => {
        if (err) {
            res.status(500).send('Error reading directory: ' + err);
            return;
        }

        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.send(filteredFiles.join('\n'));
    });
});

hw2Router.get('/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        res.status(400).json({ error: 'Missing iso query paramter' });
        return;
    }

    const date = new Date(iso);
    const result = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };

    res.json(result);
});

hw2Router.get('/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        res.status(400).json({ error: 'Missing iso query parameter' });
        return;
    }

    const date = new Date(iso);
    const result = {
        unixtime: date.getTime()
    };

    res.json(result);
})