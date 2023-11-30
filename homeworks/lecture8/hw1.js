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
const app = express();
const fs = require('fs');
const path = require('path');

app.get('/hw1/:dir/:ext', (req, res) => {
    let { dir, ext } = req.params;
    let reply = "";
    let files;
    dir = path.join(__dirname, path.normalize(dir));
    ext = "." + ext;

    if (!fs.existsSync(dir)) {
        res.send(`Directory doesn't exist!`);
        return;
    }
    files = fs.readdirSync(dir);
    files = files.filter(v => {
        const fullPath = path.join(dir, v);
        //console.log(fullPath);
        return !fs.statSync(fullPath).isDirectory();
    }
    );
    files = files.filter(v => path.extname(v) === ext)
    files.forEach((v) => reply += `<p>${v}</p>`);
    res.send(reply);
});
app.get('/api/:format', (req, res) => {
    if ("iso" in req.query) {
        const iso = req.query.iso;
        let result = "wrong format";
        if (req.params.format === "parsetime") {
            const date = new Date(iso);
            const hour = date.getUTCHours();
            const minute = date.getUTCMinutes();
            const second = date.getUTCSeconds();
            result = JSON.stringify({ hour, minute, second });
        } else if (req.params.format === "unixtime") {
            const unixtime = Date.parse(iso);
            result = JSON.stringify({ unixtime });
        }
        res.send(result);
    } else {
        res.send("no iso info");
    }
    return;
});
app.listen(4000, () => {
    console.log('Example app listening on port 3000!');
});
