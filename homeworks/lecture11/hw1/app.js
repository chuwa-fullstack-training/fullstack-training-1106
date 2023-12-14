const express = require("express");
const routes = require("./routes");
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

// connect to mangodb & listen for requests
const dbURI = process.env.MONGODB_URL;
mongoose.connect(dbURI)
   .then(_ => app.listen(3000))
   .catch(err => console.error(err));

// view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/');

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
app.get('/', (req, res) => {
    res.redirect("/api/companies");
})

app.use('/api', routes);

// 404 page
app.use((req, res) => {
    res.status(404).render('error', { title: '404' });
});