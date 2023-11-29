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
const PORT = 3000

const server = http.createServer((req, res) =>{
    const {url:hostname} = req;
    let origUrl = url.parse(hostname,true).pathname;
    let params = url.parse(hostname,true).query?.iso;
    if(params === undefined){
        res.end('401 error!');
        return;
    } 
    const date = new Date(params);
    if(origUrl === '/api/parsetime'){
        let obj = {hour:date.getHours(),minute:date.getMinutes(), second: date.getSeconds()};
        res.end(JSON.stringify(obj));
    }else if(origUrl === '/api/unixtime'){
        res.end(JSON.stringify(date.getTime()));
    }else if(origUrl ==='/favicon.ico'){
        res.end('Not exist!');
    }
    else{
        res.end('404 not found!');
        return;
    } 
});

server.listen(PORT,() =>{
    console.log('listening to port:' + PORT);
})