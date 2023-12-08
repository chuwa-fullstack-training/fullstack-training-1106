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

const http = require('http');
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const {url, method} = req;

    if (method === 'GET') {
        switch (url.split('?')[0]) {
            case '/':
                res.end('this is the home page');
                break;
            case '/about':
                res.end('this is the about page');
                break;
            case '/home.html':
                fs.readFile(path.join(__dirname, 'home.html'), (err, html) => {
                    if (err) {
                        res.end('error');
                    } else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.write(html);
                        res.end();
                    }
                });
                break;
            default:
                res.end('this is the 404 page');
        }

    } else if (method === 'POST') {
        if (url === '/create-post') {
            let body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            
            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                // send back result
                res.statusCode = 302; 
                res.setHeader('Location', `/home.html?title=${parsedBody.split('&')[0].split('=')[1]}&content=${parsedBody.split('&')[1].split('=')[1]}`);
                res.end();
            });
        } else {
            res.end('this is the 404 page');
        }
    }
})



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});