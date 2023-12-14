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
  const urlInfo = url.parse(req.url, true);
  if (urlInfo.pathname === "/api/parsetime") {
    const time = urlInfo.query.iso;
    const times = time.split("T")[1].split(":");
    const obj = {
      hour: times[0],
      minutes: times[1],
      second: times[2].substr(0, 2),
    };
    res.writeHead(200, { contentType: "application/json" });
    res.write(JSON.stringify(obj));
    res.end();
  }
  if (urlInfo.pathname === "/api/unixtime") {
    const obj = {
      unixtime: Number(new Date(urlInfo.query.iso)),
    };
    res.writeHead(200, { contentType: "application/json" });
    res.write(JSON.stringify(obj));
    res.end();
  }
});
server.listen(8080);
