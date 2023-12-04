/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views',__dirname + '/views');

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res) =>{
    res.send('this is the home page');
})
app.get('/about',(req,res) =>{
    res.send('this is the about page');
})
app.get('/home.html', (req, res) => {
    const{name, age} = req.query;
    res.render('user',{person:name,contact: age});
})
app.post('/create-post',(req,res) => {
    let body = req.body;

    res.redirect('/home.html?' + `name=${body.name}&age=${body.email}`);
})
app.use('*',(req, res) =>{
    res.send('404 not found!');
}
)

app.listen(port, () => console.log(`Listening on port ${port}`));