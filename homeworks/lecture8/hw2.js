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
const axios = require('axios');
const app = express();


app.get('/hw2', async (req, res) => {
    const {query1, query2} = req.query;
    if(!query1 || !query2){
        res.status(400).send("query1 or query2 is missing");
        return;
    }
    try{
        const responseObj= {};
        const result1 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
        responseObj[query1] = {
            created_at : result1.data.hits[0].created_at,
            title: result1.data.hits[0].title
        }
        const result2 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
        responseObj[query2] = {
            created_at : result2.data.hits[0].created_at,
            title: result2.data.hits[0].title
        }
        console.log("responseObj",responseObj);
        res.status(200).json(responseObj);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})
app.listen(3000, () =>{
    console.log("The server is running on local port 3000.");
    console.log("http://localhost:3000/hw2?query1=apple&query2=banana");
    console.log("http://localhost:3000/hw2?query1=cat&query2=dog");
})