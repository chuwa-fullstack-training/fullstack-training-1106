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
const express = require("express");
const fs = require("fs");
const path = require("path");
const router1 = express.Router(); // this is for hw1
const router2 = express.Router(); // this is for hw2
const PORT = 3000;

router1.get("/:dir/:ext", (req, res) => {
  const dir = req.params.dir;
  const ext = req.params.ext;
  let f = "";
  fs.readdir(dir, (err, files) => {
    if (err) throw new Error(err);
    for (const file of files) {
      if (path.extname(file) === "." + ext) {
        f += file + " ";
        console.log(file);
      }
    }
    res.end(f);
  });
});

router2.get("/parsetime", (req, res) => {
  const time = req.query.iso;
  const times = time.split("T")[1].split(":");
  const obj = {
    hour: times[0],
    minutes: times[1],
    seconds: times[2].substr(0, 2),
  };
  res.writeHead(200, { contentType: "application/json" });
  res.write(JSON.stringify(obj));
  res.end();
});
router2.get("/unixtime", (req, res) => {
  const obj = {
    unixtime: Number(new Date(req.query.iso)),
  };
  res.writeHead(200, { contentType: "application/json" });
  res.write(JSON.stringify(obj));
  res.end();
});

const app = express();
app.use("/hw1", router1);
app.use("/api", router2);

app.listen(PORT);
