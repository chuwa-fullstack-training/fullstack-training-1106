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
const app = express();
const fs = require('fs')
const path = require('path')
const PORT = 3000;


//hw1
const router1 = express.Router()
app.use('/hw1', router1);

router1.get('/:dir/:ext',(req,res)=>{
    const directory = path.join(__dirname, req.params.dir);
    const extension = '.'+ req.params.ext;

    fs.readdir(directory, (err, files)=>{
        if(err){
            console.log(err);
        }
        else{
            const filteredFiles = files.filter(file => path.extname(file) === extension);
            res.json(filteredFiles);
        }
    })
})
//test: http://localhost:3000/hw1/test/txt

//hw2
const router2 = express.Router();
app.use('/hw2', router2);

router2.get('/parsetime',(req,res)=>{
    const isoDate = req.query.iso;
    const date = new Date(isoDate);

    const parseTime = {
        hour:date.getHours(),
        minute:date.getMinutes(),
        second:date.getSeconds()
    }
    res.end(JSON.stringify(parseTime));
})

router2.get('/unixtime',(req,res)=>{
    const isoDate = req.query.iso;
    const unixtime = {unixtime:Date.parse(isoDate)};
    res.end(JSON.stringify(unixtime));
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//test: 
//http://localhost:3000/hw2/parsetime?iso=2023-11-22T12:34:56.789Z
//http://localhost:3000/hw2/unixtime?iso=2023--22T12:34:56.789Z
