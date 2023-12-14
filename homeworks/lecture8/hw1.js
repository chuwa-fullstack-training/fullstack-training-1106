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

const hw1Router = express.Router();

hw1Router.get('/:dir/:ext', (req, res) => {
    let directory;
    if (req.params.dir === 'current') {
        directory = __dirname;
    } else {
        directory = path.join(__dirname, req.params.dir);
    }

    const extension = '.' + req.params.ext;

    fs.readdir(directory, (err, files) => {
        if (err) {
            res.status(404).send('Directory Error');
            return;
        }
        const filteredFiles = files.filter(file => path.extname(file) === extension);
        res.status(200).json(filteredFiles);
    });
});
//http://localhost:3000/hw1/current/js


const hw2Router = express.Router();
hw2Router.get('/parsetime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        res.status(400).send({ error: 'iso parameter is missing' });
        return;
    }
    let date = new Date(iso);
    const time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    };
    res.status(200).json(time);
});

hw2Router.get('/unixtime', (req, res) => {
    const iso = req.query.iso;
    if (!iso) {
        res.status(400).send({ error: 'iso parameter is missing' });
        return;
    }
    let date = new Date(iso);
    const time = {
        unixtime: date.getTime()
    };
    res.status(200).json(time);
});

app.use('/hw1', hw1Router);
app.use('/api', hw2Router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
