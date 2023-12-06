/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('this is the home page');
});

app.get('/about', (req,res)=>{
    res.send('this is the about page');
});

app.get('/home.html', (req,res)=>{
    if(Object.keys(req.query).length === 0){
        res.render('home');
    }
    else{
        res.render('home', { msg: `title=${req.query.title}&content=${req.query.content}`});
    }
});

app.post('/create-post', (req,res)=>{
    const searchParams = new URLSearchParams(req.body);
    res.redirect(302, `/home.html?${searchParams.toString()}`);
});

app.listen(port, ()=>console.log(`app is running on ${port}`));