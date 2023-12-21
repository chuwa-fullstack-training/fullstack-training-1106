/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname);

app.get('/', (req, res) =>{
    res.status(200).send("This is the home page");
});

app.get('/about', (req, res) =>{
    res.status(200).send("This is the about page");
});

app.get('/home.html',(req,res) => {
    fs.readFile(path.join(__dirname,'home.html'),(err, html)=>{
        if(err){
            res.status(500).send("Error in reading html file" + err.message);
            return;
        }
        res.status(200).type('text/html').send(html);
    });
});

app.post('/create-post',(req,res) => {
    let body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log("test parsedBody: ",parsedBody);
      res.statusCode = 302; 
      res.setHeader('Location', `/home.html?${parsedBody}`);

      res.end();
    });
});

app.use((req,res) =>{
    res.status(404).send("this is 404 page");
})


app.listen(PORT,() => {
    console.log("Server is running on port 3000");
    console.log(`http://localhost:${PORT}/home.html`);
})