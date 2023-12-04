const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const title = req.query.title
    const content = req.query.content
    if (title && content) {
        res.render('index', {title: 'Welcome', h1: 'Welcome to Nodejs tutorial', query1: title, query2: content});
    }
    else{
        res.render('index', {title: 'Welcome', h1: 'Welcome to Nodejs tutorial'});
    }
    
});

router.post('/create-post', (req, res) => {
    const parseBody = req.body;
    const querystring = new URLSearchParams(parseBody).toString();

    res.redirect('/?'+querystring);
});

module.exports = router;