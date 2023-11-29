/**
 * For sample code web-server.js, make the following changes:
 * Once submitting in home.html, stay on the same page and display the submitted data.
 *
 * Hint:
 * 1. put the data of the submitted form in the query string of the url
 * 2. before res.end() in POST method, redirect to the home.html page with the query string
 *  - i.e. res.statusCode = 302; res.setHeader('Location', '/home.html?name=John&age=20');
 * 3. you need to figure out how to parse the query string in the home.html page
 * 4. after writing the html content, you need to write the query string in the html as well
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const urlMod = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (method === "GET") {
    if (url === "/") {
      res.end("this is the home page");
    } else if (url === "/about") {
      res.end("this is the about page");
    } else if (url.startsWith("/home.html")) {
      const { query } = urlMod.parse(req.url, true);
      fs.readFile(path.join(__dirname, "home.html"), (err, html) => {
        if (err) {
          res.end("error");
        } else {
            html = html.toString();
            if(query.age && query.name) {
                const temp = html.includes('<input type=\"text\" name=\"name\">\n');
                html = html.replace('<input type=\"text\" name=\"name\">\n', `<input type=\"text\" name=\"name\" value=\"form server: ${query.name}\">\n`);
                html = html.replace(`<input type=\"number\" name=\"age\">\n `, `<input type=\"number\" name=\"age\" value=\"${+query.age}\">`);
            }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(html);
          res.end();
        }
      });
    } else {
      res.end("this is the 404 page");
    }
  } else if (method === "POST") {
    if (url === "/create-post") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const formData = qs.parse(body);
        // console.log(JSON.parse(parsedBody));
        res.statusCode = 302;
        res.setHeader(
          "Location",
          `/home.html?name=${formData.name}&age=${formData.age}`
        );
        res.end();
      });
    } else {
      res.end("this is the 404 page");
    }
  } else {
    res.end("Unsupported method");
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
