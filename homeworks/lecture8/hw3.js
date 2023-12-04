/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('this is the home page');
})
app.get('/about', (req, res) => {
    res.send('this is about page');
})

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
})

app.post('/create-post', (req, res) => {
    const formData = req.body;
    res.redirect(`/home.html?${new URLSearchParams(formData).toString()}`)
})

app.use((req, res) => {
    res.status(404).send('this is the 404 page')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
