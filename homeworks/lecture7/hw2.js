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
const http = require('http')
const url = require('url');
const PORT = 3000;
const server = http.createServer((req, res) => {
    const parsed_url = url.parse(req.url, true);//将第二个参数设置为true，会自动解析URL中的查询字符串
    const pathname = parsed_url.pathname;
    const iso = parsed_url.query.iso;
    if (pathname === '/') {
        res.end('this is the home page');
    }
    else {
        if (iso) {
            let output;
            const date = new Date(iso);
            if (pathname === '/api/parsetime') {
                output = {
                    hour: date.getHours(),
                    minute: date.getMinutes(),
                    second: date.getSeconds()
                };
            }
            else if (pathname === '/api/unixtime') {
                output = { unixtime: date.getTime() };
            }
            res.writeHead(200, { 'contentType': 'application/json' });
            res.end(JSON.stringify(output));
        }
        else {
            res.writeHead(404, { contentType: 'application/json' });
            res.end('Invalid URL');
        }
    }
});

server.listen(process.env.PORT || PORT, () => {
    console.log('Server is running on port 3000');
});