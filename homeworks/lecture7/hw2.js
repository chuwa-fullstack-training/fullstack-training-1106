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
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const iso = parsedUrl.query.iso;

    if (!iso) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'iso parameter is missing' }));
        return;
    }

    let date = new Date(iso);

    if (path === '/api/parsetime') {
        const time = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(time));
    } else if (path === '/api/unixtime') {
        const time = {
            unixtime: date.getTime()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(time));
    } else {
        res.writeHead(404);
        res.end();
    }
});

const PORT = 3000; // You can choose any free port
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/api/`);
});
//http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z
//http://localhost:3000/api/unixtime?iso=2023-05-22T12:34:56.789Z
