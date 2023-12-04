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
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    res.writeHead(200, { contentType: 'application/json' });

    const result = {};

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
    res.write(JSON.stringify(result, null, 2));
    res.end();
});

server.listen(3000, 'localhost');