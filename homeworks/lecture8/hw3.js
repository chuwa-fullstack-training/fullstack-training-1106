/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express')
const querystring = require('querystring');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use(express.urlencoded({extended: true}));

app.post('/create-post',(req, res) => {
    const postData = {
        title: req.body.title,
        content: req.body.content
    };

    res.status(302).render('home', {postData })
});
app.use(express.static('public'));
app.use((req, res) => {
    res.status(404).render('404');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});