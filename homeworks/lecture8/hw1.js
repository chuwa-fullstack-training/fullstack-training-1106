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

// Router for hw1
const hw1Router = express.Router();

hw1Router.get('/:dir/:ext', (req, res) => {
  const directory = path.join(__dirname, req.params.dir);
  const extensionFilter = req.params.ext;

  fs.readdir(directory, (err, files) => {
    if (err) {
      return res.status(500).json({ error: `Error reading directory: ${err}` });
    }

    const filteredFiles = files.filter(file => path.extname(file) === `.${extensionFilter}`);

    if (filteredFiles.length > 0) {
      res.json({
        message: `Files with the extension '.${extensionFilter}' in ${directory}`,
        files: filteredFiles,
      });
    } else {
      res.json({
        message: `No files with the extension '.${extensionFilter}' found in ${directory}`,
        files: [],
      });
    }
  });
});

// Router for hw2
const hw2Router = express.Router();

hw2Router.get('/parsetime', (req, res) => {
  const isoTime = new Date(req.query.iso);
  const timeObject = {
    hour: isoTime.getHours(),
    minute: isoTime.getMinutes(),
    second: isoTime.getSeconds(),
  };

  res.json(timeObject);
});

hw2Router.get('/unixtime', (req, res) => {
  const isoTime = new Date(req.query.iso);
  const unixTimeObject = {
    unixtime: isoTime.getTime(),
  };

  res.json(unixTimeObject);
});

// Use routers in the main app
app.use('/hw1', hw1Router);
app.use('/hw2', hw2Router);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
