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
const { error, timeStamp } = require("console");
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const storyRouter = require("./hw2");

app.get("/hw1/:dir/:ext", (req, res) => {
  //   console.log(req.params.dir);
  //   console.log(req.params.ext);
  const directory = req.params.dir;
  const extension = req.params.ext;
  const folder = path.join(process.cwd(), directory);
  fs.readdir(folder, (error, files) => {
    if (error) {
      res.status(404).send(error.message);
    }
    const found = files.reduce((acc, file) => {
      if (path.extname(file) === "." + extension) {
        acc.push(file);
      }
      return acc;
    }, []);
    res.send(found);
  });
});

app.get("/hw2/parsetime", (req, res) => {
    const { iso } = req.query;
    const timeStamp = new Date(iso);
    const timeObject = {
        hour: timeStamp.getUTCHours(),
        minute: timeStamp.getUTCMinutes(),
        second: timeStamp.getUTCSeconds(),
    };
    res.send(JSON.stringify(timeObject));
});

app.get("/hw2/unixtime", (req, res) => {
    const { iso } = req.query;
    const timeStamp = new Date(iso);
    const timeObject = {
        unixtime: timeStamp.getTime()
    }
    res.send(JSON.stringify(timeObject));
})

app.use(storyRouter);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
