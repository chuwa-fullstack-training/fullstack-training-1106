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
const PORT = 3000;

const server = http.createServer((request, response)=>{
    const {url: u} = request;
    const parseUrl = url.parse(u);

    if (parseUrl.pathname === '/'){
        response.end('this is the home page');
    }
    else if(parseUrl.pathname === '/api/unixtime'){
        response.writeHead(200, {contentType : 'application/json'});
        let returnJSON = JSON.stringify({
            unixtime: Date.parse(parseUrl.query?.split('=')[1])
        });
        response.write(returnJSON);
        response.end();
    }
    else if(parseUrl.pathname === '/api/parsetime'){
        response.writeHead(200, {contentType : 'application/json'});
        const time = new Date(parseUrl.query?.split('=')[1]);
        let returnJSON = JSON.stringify({
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds(),
        });
        response.write(returnJSON);
        response.end();
    }
    else{
        response.end('this is the 404 page');
    }
});

server.listen(PORT, ()=>{
    console.log('Server is running on port 3000');
});