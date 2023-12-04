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
const URL = require('url')
const PORT = 8080;

const server = http.createServer((req, res) => {
    const {url, method} = req;
    const parseUrl = URL.parse(url,true)
    const iso = parseUrl.query.iso
    if (method === 'GET'){
        if (url.startsWith('/api/parsetime')){
            if (iso) {
                const date = new Date(iso);
                let UTCTimes = {
                    hour: date.getUTCHours(),
                    minute: date.getUTCMinutes(),
                    second: date.getUTCSeconds()
                };
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(UTCTimes))
            }else{
                res.writeHead(404)
                res.end('This is a 404 page!')
            }
        } 
        else if (url.startsWith('/api/unixtime')){
            if (iso) {
                const date = new Date(iso);
                let UnixTimes = {
                    unixtime: date.getTime()
                }

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(UnixTimes))
            }else{
                res.writeHead(404)
                res.end('This is a 404 page!')
            }
        }else{
            res.writeHead(404)
            res.end('This is 404 page!')
        }
    }
})

server.listen(PORT, () => {
    console.log(`The Server is running on port ${PORT}`);
})

