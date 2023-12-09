/**
 * https://hn.algolia.com/api
 *
 * write a router function that takes two query parameters: query1 and query2
 * and returns the partial result from the following query in order:
 * https://hn.algolia.com/api/v1/search?query=query1&tags=story
 * https://hn.algolia.com/api/v1/search?query=query2&tags=story
 *
 * e.g. http://localhost:3000/hw2?query1=apple&query2=banana
 *
 * result from https://hn.algolia.com/api/v1/search?query=apple&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2020-11-12T21:00:12.000Z",
 *   "title": "macOS unable to open any non-Apple application",
 *   ...
 *   }
 * ]}
 * 
 * result from https://hn.algolia.com/api/v1/search?query=banana&tags=story:
 * {
 *  "hits": [
 *   {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose",
 *   ...
 *   }
 * ]}
 * 
 * final result from http://localhost:3000/hw2?query1=apple&query2=banana:
 * {
 *   "apple":
 *   {
 *     "created_at": "2020-11-12T21:00:12.000Z",
 *     "title": "macOS unable to open any non-Apple application"
 *   },
 *  "banana":
 *  {
 *   "created_at": "2010-06-14T12:54:07.000Z",
 *   "title": "Banana equivalent dose"
 *  }
 * }
 */

const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.get('/hw2', async (req, res) => {
    const query1 = req.query.query1;
    const query2 = req.query.query2;

    try{
        const response1 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
        const data1 = await response1.json();

        const response2 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
        const data2 = await response2.json();
        console.log(data1);
        const result = {
            [query1]: data1.hits.length >= 1 ? {created_at : data1.hits[0].created_at, title: data1.hits[0].title} : {},
            [query2]: data2.hits.length >= 1 ? {created_at : data2.hits[0].created_at, title: data2.hits[0].title} : {}
        };

        res.json(result);

    }catch (error){
        res.status(500).send('Error fetching data');
    }
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})