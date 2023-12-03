/**
 * Refactor hw1 and hw2 in lecture 7 in Express.js.
 * Requirements:
 * 1. make two routers, one for hw1 and one for hw2;
 * 2. hw1 should be able to handle requests with url params, rather than command-line arguments;
 *  - e.g. http://localhost:3000/hw1/<dir>/<ext>
 *  - `dir` only support one level down from the current repository,
 *    i.e http://localhost:3000/hw1/test/txt.
 *    You don't need to handle the case like http://localhost:3000/hw1/test/test/txt.
 * 3. hw2 should be able to handle requests with query strings like it did in lecture 7;
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

//hw1 router
app.get('/hw1/:dir/:ext',(req,res) => {
    let dir = __dirname + '/' + req.params.dir;
    let ext = '.' + req.params.ext;

    fs.readdir(dir, (err,files) => {
        let results = [];
        console.log(__dirname);
        if(err){
            console.log(err);
        }else{
            console.log('------------------');
            for(let i of files){
                if(path.extname(i) === ext){
                    console.log(i);
                    results.push(i);
                } 
            }
        }
        res.json(results);;
        
    });
    
})

//hw2 router
app.get('/api/:id',(req,res) => {
    const {iso} = req.query;
    const date = new Date(iso);
    if(req.params.id === 'parsetime'){
        let obj = {hour:date.getHours(),minute:date.getMinutes(), second: date.getSeconds()};
        res.send(JSON.stringify(obj));
    }else if(req.params.id === 'unixtime'){
        res.send(JSON.stringify(date.getTime()));
    }else{
        res.status(404);
        res.send('404 not found!')
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
