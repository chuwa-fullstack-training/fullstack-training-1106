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

const express = require("express");
const axios = require("axios");

const router = express.Router();

router.get("/hw2", async (req, res) => {
    const {query1, query2 } = req.query;
    if(query1 && query2) {
        try{
            const response1 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
            const data1 = response1.data.hits.map(({created_at, title}) => ({created_at, title}));

            const response2 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
            const data2 = response2.data.hits.map(({created_at, title}) => ({created_at, title}));
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({
                [query1]: {
                    created_at: data1[1].created_at,
                    title: data1[1].title
                },
                [query2]: {
                    created_at: data2[0].created_at,
                    title: data2[0].title
                },
            }));
        } catch(error) {
            res.status(404).send(error.message);
        }
    } else {
        res.status(404).send("missing query parameters");
    }
})

module.exports = router;