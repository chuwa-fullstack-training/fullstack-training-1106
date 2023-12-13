const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();

// connect to mangodb & listen for requests
const dbURI = "";
mongoose.connect(dbURI)
    .then(_ => app.listen(3000))
    .catch(err => console.error(err));

// view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get('/', (req, res) => {
    res.redirect("/company");
})

app.use('/api', routes);

// 404 page
app.use((req, res) => {
    res.status(404).render('error', { title: '404' });
});