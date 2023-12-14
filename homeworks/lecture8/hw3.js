/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path =  require('path')
const PORT = 8000;

const app = express();

app.set('view engine','pug');
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
    const { title, content } = req.query;
    res.render('home', { title, content });
});

app.post('/create-post', (req,res)=>{
    const { title, content } = req.body;
    res.redirect(302, `/home.html?title=${title}&content=${content}`);
});

app.listen(PORT,()=>{
    console.log(`listen to the port: ${PORT}`)
})


