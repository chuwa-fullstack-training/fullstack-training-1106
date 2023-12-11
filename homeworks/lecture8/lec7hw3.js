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

// your code here
const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const { url: reqUrl, method } = req;
  const parsedUrl = url.parse(reqUrl, true);

  if (method === 'GET') {
    if (reqUrl === '/') {
      res.end('this is the home page');
    } else if (reqUrl === '/about') {
      res.end('this is the about page');
    } else if (reqUrl.startsWith('/home.html')) {
      fs.readFile(path.join(__dirname, 'home.html'), 'utf8', (err, html) => {
        if (err) {
          res.end('error');
        } else {
          // 解析查询字符串
          const queryParams = parsedUrl.query;

          // 在 HTML 中显示查询字符串的内容
          const htmlWithQuery = html.replace(
            '</body>',
            `<p>Submitted Data: ${JSON.stringify(queryParams)}</p></body>`
          );

          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(htmlWithQuery);
          res.end();
        }
      });
    } else {
      res.end('this is the 404 page');
    }
  } else if (method === 'POST') {
    if (reqUrl === '/create-post') {
      let body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();

        // 重定向到 home.html 页面并带上查询字符串
        res.writeHead(302, { 'Location': `/home.html?${parsedBody}` });
        res.end();
      });
    } else {
      res.end('this is the 404 page');
    }
  } else {
    res.end('Unsupported method');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
