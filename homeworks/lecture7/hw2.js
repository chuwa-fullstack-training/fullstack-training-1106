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

// your code hereconst http = require("http");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}/`);
  const query = new URLSearchParams(url.search);
  let result;
  if (url.pathname === "/api/parsetime") {
    const iso = query.get("iso");
    if (iso) {
      const date = new Date(iso);
      const hour = date.getUTCHours();
      const minute = date.getUTCMinutes();
      const second = date.getUTCSeconds();
      result = { hour, minute, second };
    }
  } else if (url.pathname === "/api/unixtime") {
    const iso = query.get("iso");
    if (iso) {
      const unixtime = Date.parse(iso);
      result = { unixtime };
    }
  }

  if (result) {
    res
      .writeHead(200, "Time info", { contentType: "application/json" })
      .end(JSON.stringify(result));
  } else {
    res.end("I am done");
  }
});

server.listen(4000);
