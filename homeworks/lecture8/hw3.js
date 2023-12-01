/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/home.html", (req, res) => {
  const { name, age } = req.query;
  res.render("home", { name, age });
});

app.post("/submit", (req, res) => {
  const { name, age } = req.body;
  res.redirect(`/home.html?name=${name}&age=${age}`);
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
