/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

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
const express = require("express");
const url = require("url");
const app = express();
app.listen(3000);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

app.get("/", (req, res) => {
    res.render('index');
})

app.get("/about", (req, res) => {
    res.render('about');
})

app.get(/^\/home\.html(\?.*)?$/, (req, res) => {
    // get query's values
    const parsedUrl = url.parse(req.url);
    if (parsedUrl.query) {
        res.render('home', { content: parsedUrl.query });
    } else {
        res.render('home', { content: '' });
    }
})

app.post('/create-post', (req, res) => {
    let body = [];
    req.on('data', chunk => {
        body.push(chunk);
    });
    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        res.statusCode = 302; 
        res.redirect(`/home.html?${parsedBody}`);
    });
})

app.use((req, res) => {
    res.status(404).render('error');
})