// https://hn.algolia.com/api/v1/search?query=query1&tags=story

const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/hw2/', async (req, res) => {
    const query1 = req.query.query1;
    const query2 = req.query.query2;
    console.log(query1,query2)
    let res1 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
    const data1 = await res1.json();
    let res2 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
    const data2 = await res2.json();

    let result = {
        [query1]: data1,
        [query2]: data2
    }
    res.json(result);
})

module.exports = router;