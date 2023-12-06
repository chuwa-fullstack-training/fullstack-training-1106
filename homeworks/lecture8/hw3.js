/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.end('this is the home page');
});

app.get('/about', (req, res) => {
    res.end('this is the about page');
});

app.get('/home.html', (req, res) => {
    res.render('home');
});
app.post('/create-post', express.urlencoded({ extended: true }),
    (req, res) => {
        res.render('home', { data: req.body });
    });
// 遗留问题：提交数据时，没有进行重定向到/home.html?name=John&age=20'

app.listen(3000, () => console.log('Example app listening on port 3000!'));