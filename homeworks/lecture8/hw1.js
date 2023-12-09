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

app.get('/hw1/:dir/:ext', (req, res) => {
    const { dir, ext } = req.params;
    const directoryPath = path.join(__dirname, dir);
    console.log(directoryPath);
    fs.readdir(directoryPath, (err, files) => {
        if(err){
            return res.status(404).send('Directory not found');
        }

        const filteredFiles = files.filter( file => path.extname(file) === `.${ext}`);
        res.send(filteredFiles.join('\n'));
    });
});

app.get('/api/parsetime', (req, res) => {
  const iso = req.query.iso;

  const date = new Date(iso);

  res.json({
      Hour: date.getHours(),
      Minute: date.getMinutes(),
      Second: date.getSeconds()
  });
});

app.get('/api/unixtime', (req, res) => {
   const iso = req.query.iso;

   const date = new Date(iso);

   res.json({
       time: date.getTime()
   });
});
app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
})
