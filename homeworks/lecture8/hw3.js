/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require("express");
const app = express();


app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (_, res) => {
    res.send('this is the home page');
});

app.get("/about", (_, res) => {
    res.send('this is the about page');
});

app.get("/home.html", (req, res) => {
    const query = req.query;
    const { title, content } = query
    if (title && content) {
        res.render("home-fill", { title, content });
    } else {
        res.render("home");
    }

});

app.post("/create-post", (req, res) => {
    //console.log(req.body);
    const { title, content } = req.body;
    const queryStr = new URLSearchParams({ title, content }).toString();
    res.redirect(`/home.html?${queryStr}`);
});

app.all("*", (_, res) => {
    res.status(404).send('this is the 404 page');
});

app.listen(4000, () => console.log("listening on 4000"));