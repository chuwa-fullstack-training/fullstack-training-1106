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
const axios = require('axios');
const { URL, URLSearchParams } = require('url');
const fs = require('fs');

const app = express();
app.listen(3000);

async function getResults(query1, query2) {
    // get the result from algolia
    let result = {};
    const response1 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
    const response2 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);

    // combine the results
    result[query1] = {"created_at": response1.data.hits[0].created_at, "title": response1.data.hits[0].title};
    result[query2] = {"created_at": response2.data.hits[0].created_at, "title": response2.data.hits[0].title};

    return result;
}

app.use((req, res) => {
    // extract the 2 queries from localhost
    // http://localhost:3000/hw2?query1=apple&query2=banana
    // const parsedUrl = new URL(req.url);
    const params = Array.from(new URLSearchParams(req.url.split('?')[1]).values());

    if (params.length === 2) {
        getResults(params[0], params[1])
            .then(result => {
                console.log("result: ", result);
                res.send(`<pre>${JSON.stringify(result, null, 2)}</pre>`);
            })
    }
});
