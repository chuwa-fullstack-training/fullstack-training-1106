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

const parseTime = (pathname, res) => {
  try {
    // convert query to date
    const query = url.parse(pathname).query;
    const isoDate = query.toString().replace('iso=', '');
    // parse time
    const date = new Date(isoDate);
    if (isNaN(date)) {
      res.end('Wrong iso time');
    }
    return date;
  } catch (error) {
    res.end('Wrong iso time');
  }
};

const server = http.createServer((req, res) => {

  const { url : pathname, method } = req

  if (method === 'GET') {
    if (pathname.startsWith('/api/parsetime')) {
      const date = parseTime(pathname, res);
      const response = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second: date.getUTCSeconds(),
      }
      // send response
      res.writeHead(200, { contentType: 'application/json' })
      res.write(JSON.stringify(response));
      res.end();
    } else if (pathname.startsWith('/api/unixtime')) {
      const date = parseTime(pathname, res);
      res.writeHead(200, { contentType: 'application/json' })
      res.write(JSON.stringify({ unixtime: date.getTime() }));
      res.end();
    } else {
      res.end('This is the 404 page');
    }
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
