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
const path = require('path');
const fs = require('fs').promises;

const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));

//hw1
app.get('/hw1/:dir/:extension', async (req, res, next)=>{
    const filesWithExt = [];

    const options = {
        encoding: 'utf8',
        withFileTypes: true
    }

    const targetPath = path.join(__dirname, req.params.dir);
    try{
        const files = await fs.readdir(targetPath, options);
        files.map((file)=>{
            if(!file.isDirectory() && file.name.endsWith(req.params.extension)){
                filesWithExt.push(file.name);
            }
        });
        res.send(filesWithExt);
    }
    catch (err){
        res.send(err);
    }
});

//hw2
app.get('/api/:time' , (req, res, next)=>{
    let returnJSON;
    if(req.params.time === 'unixtime'){
        returnJSON = {
            unixtime: Date.parse(req.query.iso),
        };
    }
    else if(req.params.time === 'parsetime'){
        const time = new Date(req.query.iso);
        returnJSON = {
            hour: time.getHours(),
            minute: time.getMinutes(),
            second: time.getSeconds(),
        };
    }
    res.status(200).type('application/json').send(returnJSON);
});

app.get('/', (req,res)=>{
    res.send('this is the home page');
});

app.listen(port, ()=> console.log(`app is running on ${port}`));