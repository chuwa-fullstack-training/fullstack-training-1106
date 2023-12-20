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
    const method = req.method;
    const myUrl = req.url;
    const parsedUrl = url.parse(req.url, true);
    const isoInput = parsedUrl.query.iso;
    if(!isoInput){
        res.writeHead(400,{ 'Content-Type': 'application/json' });
        res.end("The iso url-line input is required");
        return;
    }
    const date = new Date(isoInput);
  
    if(method === 'GET'){
        if(myUrl.startsWith('/api/parsetime')){
            const responseObj = {
                hour: date.getUTCHours(),
                minute: date.getUTCMinutes(),
                second:  date.getUTCSeconds()
            }
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(responseObj));
        }else if(myUrl.startsWith('/api/unixtime')){
            const responseObj = {
                unixtime: date.getTime()
            }
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(JSON.stringify(responseObj));
        }else{
            res.end("This is a 404 page");
        }
    }
    else{
        res.end("unsupported method");
    }
})

server.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
})