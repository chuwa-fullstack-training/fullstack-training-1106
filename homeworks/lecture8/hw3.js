/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

/**
 *hw3
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

const express = require("express");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("this is the home page");
});

app.get("/about", (req, res) => {
  res.end("this is the about page");
});
app.get("/home.html", (req, res) => {
  fs.readFile(path.join(__dirname, "home.html"), (err, html) => {
    if (err) {
      res.end("error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(html);
      res.end();
    }
  });
});
app.post("/create-post", (req, res) => {
  const parsedBody = querystring.stringify(req.body);
  res.statusCode = 302;
  res.setHeader("Location", `/home.html?${parsedBody}`);
  res.end(parsedBody);
});
app.use((req, res) => {
  res.status(404).json({ message: "Unsupported method" });
});
app.listen(3000);
