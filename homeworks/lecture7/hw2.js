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
    const iso = parsedUrl.query.iso;
    const pathName = parsedUrl.pathname;
    if (req.method === 'GET') {
        if (pathName === '/api/parsetime') {
            const date = new Date(iso);
            const timeObj = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(timeObj));
        } else if (pathName === '/api/unixtime') {
            const timeObj = { unixtime: new Date(iso).getTime() };
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(timeObj));
        } else {
            res.writeHead(404);
            res.end("404. URL invalid.");
        }
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

/* TEST:
URL:
http://localhost:3000/api/parsetime?iso=2023-05-22T12:34:56.789Z
Output:
{"hour":5,"minute":34,"second":56}

URL:
http://localhost:3000/api/unixtime?iso=2023-06-22T12:34:56.789Z
Output:
{"unixtime":1687437296789}
*/