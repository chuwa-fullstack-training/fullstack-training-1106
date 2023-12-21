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
const PORT = 3000;
const hw1 = express.Router();
const hw2 = express.Router();

//eg: http://localhost:3000/hw1/test/txt
hw1.get('/:dir/:ext', async(req, res) => {
    const dir = req.params.dir;
    const ext = req.params.ext;
    if(!dir || !ext){
        res.status(400).send("directory or extension input is missing");
    }
    const dirPath = __dirname + '/' + dir;
    try{
        console.log("dirPath:", dirPath);
        const files = await new Promise((resolve, reject) => {
            fs.readdir(dirPath, (err, files) => {
                if (err) reject(err);
                else resolve(files);
            });
        });
        console.log("files:", files);
        const filesFiltered = files.filter(file => path.extname(file) === `.${ext}`);
        let responseObj = {};
        const fileReadingPromises = filesFiltered.map(async file => {
            const filePath = path.join(dirPath, file);
            try {
                responseObj[file] = await new Promise((resolve, reject) =>{
                    fs.readFile(filePath, 'utf-8', (err, content) => {
                        if (err) reject(err);
                        else resolve(content);
                    });
                });  
            } catch (readErr) {
                console.error("Error reading file:", readErr);
                res.status(500).send("Error happens reading file content");
            }
        });
        await Promise.all(fileReadingPromises);
        console.log("responseObj: ", responseObj);
        res.status(200).send(responseObj);

    }catch(err){
        console.error("Error:", err);
        res.status(500).send("Error occurred while processing the request of /hw1");
    }
 
});

//eg: http://localhost:3000/hw2/api/parsetime/?iso=2023-05-22T12:34:56.789Z
hw2.get('/api/parsetime',(req,res) => {
    const {iso} = req.query;
    if(!iso){
        res.status(400).send("iso url inline input is required");
        return;
    }
    const date = new Date(iso);
    const responseObj = {
        hour: date.getUTCHours(),
        minute: date.getUTCMinutes(),
        second:  date.getUTCSeconds()
    }
    res.status(200).send(responseObj);
});

//eg: http://localhost:3000/hw2/api/unixtime/?iso=2023-05-22T12:34:56.789Z
hw2.get('/api/unixtime',(req,res) => {
    const {iso} = req.query;
    if(!iso){
        res.status(400).send("iso url inline input is required");
        return;
    }
    const date = new Date(iso);
    const responseObj = {
        unixtime: date.getTime()
    }
    res.status(200).send(responseObj);

})


app.use('/hw1', hw1);
app.use('/hw2',hw2);

app.listen(PORT, ()=>{
    console.log("app is running on http://localhost:3000");
});



