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
  // Parse the URL to get the pathname and query parameters
  const parsedUrl = url.parse(req.url, true);

  // Set content type to JSON in the response headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Handle different API endpoints
  if (parsedUrl.pathname === '/api/parsetime') {
    // Parse ISO time and extract hour, minute, and second
    const isoTime = new Date(parsedUrl.query.iso);
    const timeObject = {
      hour: isoTime.getHours(),
      minute: isoTime.getMinutes(),
      second: isoTime.getSeconds(),
    };

    // Send the JSON response
    res.end(JSON.stringify(timeObject));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    // Parse ISO time and extract Unix timestamp
    const isoTime = new Date(parsedUrl.query.iso);
    const unixTimeObject = {
      unixtime: isoTime.getTime(),
    };

    // Send the JSON response
    res.end(JSON.stringify(unixTimeObject));
  } else {
    // Handle invalid API endpoint
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Invalid API endpoint' }));
  }
});

// Set the port for the server to listen on
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
