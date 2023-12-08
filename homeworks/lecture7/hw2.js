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

// your code here

const http = require('http');
const url = require("url");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true).pathname;
    const query = url.parse(req.url, true).query;

    if (parsedUrl === '/api/parsetime') {
        res.writeHead(200, { contentType: 'application/json' })
            .end(parseTime(query));
    }
    else if (parsedUrl === '/api/unixtime') {
        res.writeHead(200, { contentType: 'application/json' })
            .end(unixTime(query));
    }
    else {
        res.statusCode = 404
        res.writeHead(404, { contentType: 'application/text' })
            .end('Can\'t find corresponding endpoint, please check.')
    }
})

function parseTime(query) {
    query = query.split('=')[1];
    const time = new Date(query);
    return JSON.stringify({ hour: time.getUTCHours(), minute: time.getMinutes(), second: time.getSeconds()})
    // for the hour: if using time.getHours(), it will return local timezone hours, so I use .getUTCHours() to match the result above
}

function unixTime(query) {
    query = query.split('=')[1];
    const time = new Date(query);
    return JSON.stringify({ unixtime: time.getTime() })
}

server.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})