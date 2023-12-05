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
const url = require("url");
const fs = require('fs');

const app = express();
app.listen(3000);

/**
 * write a program that prints a list of files in the given directory, filtered by the extension of the files.
 * The first argument is the directory name and the second argument is the extension filter.
 * Print the list of files (one file per line) to the console.
 *
 */

function getElements(pathname) {
    pathname = pathname.split("/");
    if (pathname.length === 4) {
        return [__dirname+"/"+pathname[2], pathname[3]];
    } else if (pathname.length === 3) {
        // treat first one as path
        return [__dirname+"/"+pathname[2], ""];
    } else {
        return ["", ""];
    }
}

function getExtension(filename) {
    let names = filename.split(".");
    return names[names.length-1];
}

app.get("/hw1/*", (req, res) => {
    const parsedUrl = url.parse(req.url);
    if (parsedUrl.pathname) {
        let [dir, filter] = getElements(parsedUrl.pathname);
        fs.readdir(dir, (err, files) => {
            if (err) { console.error(err); }
            else {
                files.forEach((val) => {
                    (filter === "" || getExtension(val) === filter) && console.log(val);
                })
            }
        })
    }
})

/**
 * Implement a HTTP server that serves JSON data where user requests /api/parsetime and /api/unixtime.
 * For example, when the user requests /api/parsetime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing only 'hour', 'minute' and 'second' properties.
 * {
 *  "hour": 12,
 *  "minute": 34,
 *  "second": 56
 * }
 * Similarly, when the user requests /api/unixtime?iso=2023-05-22T12:34:56.789Z, the server should
 * respond with a JSON object containing a 'unixtime' property.
 * {
 *  "unixtime": 1684758896789
 * }
 *
 * HINTS:
 * 1. Use url.parse() method to parse URL strings.
 * 2. response.writeHead(200, { contentType: 'application/json' })
 */
app.get("/api/*", (req, res) => {
    const result = {};
    const parsedUrl = url.parse(req.url);
    switch(parsedUrl.pathname) {
        case "/api/parsetime":
            // convert date to json
            let date = new Date(parsedUrl.query.substring(4));
            result["hour"] = date.getHours();
            result["minute"] = date.getMinutes();
            result["second"] = date.getSeconds();
            break;
        
        case "/api/unixtime":
            result["unixtime"] = Date.parse(parsedUrl.query.substring(4));
            break;

        default:
            break;
    }
    res.send(result);
})


app.use((req, res) => {
    res.status(404).send('<p>404 not found</p>');
})