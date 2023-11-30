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

const http = require('http');
const url = require('url');
const PORT = 3000;

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


const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathName = parsedUrl.pathname;
    const time = new Date(parsedUrl.query.iso);
    var result;

    if (pathName === '/api/parsetime')
      result = parsetime(time);
    else if (pathName === '/api/unixtime')
      result = unixtime(time);

    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } else {
      res.writeHead(404);
      res.end();
    }
})
  
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
