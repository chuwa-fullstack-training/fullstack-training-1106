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

const express = require("express");
const fs = require('fs');
const app = express();
const port = 3000;

app.get("/hw1/:path/:ext", (req, res) => {
    fs.readdir(req.params.path, (err, files) => {
        // handle err if needed
        const filteredFiles = files.filter(file => file.endsWith(req.params.ext));
        res.status(200).send(`Files: ${filteredFiles.join(', ')}`);
    });
    
});

app.get("/api/parsetime", (req, res) => {
    const iso = req.query.iso;
    const isoDate = new Date(iso);
    const response = {
        hour: isoDate.getHours(),
        minute: isoDate.getMinutes(),
        second: isoDate.getSeconds(),
    };
    res.status(200).json(response);
});

app.get("/api/unixtime", (req, res) => {
    const iso = req.query.iso;
    const isoDate = new Date(iso);
    res.status(200).json({"unixtime": isoDate.getTime().toString()});
});

app.listen(port, () => {
  console.log("Listening port 3000 !");
});