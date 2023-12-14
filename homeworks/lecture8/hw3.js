/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;

    res.render('home', { name, age });
});

app.post('/submitData', (req, res) => {
    const { name, age } = req.body;
    res.redirect(`/?name=${encodeURIComponent(name)}&age=${encodeURIComponent(age)}`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
