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
const https = require('https');
const router = express.Router();
const app = express();
const port = 3000;


function fetchData(url) {
    console.log("url: ", url);
    return new Promise((resolve, reject) => {
        https.get(url, res => {
            let data = '';
            res.on('data', chunk => {
                data += chunk;
            });
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', err => {
            reject(err);
        });
    });
}

router.get('/hw2', async (req, res) => {
    try {
        const { query1, query2 } = req.query;
        const url1 = `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`;
        const url2 = `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`;
        const res1 = await fetchData(url1);
        const res2 = await fetchData(url2);
        const result = {
            [query1]: res1.hits[0] ? {
                created_at: res1.hits[0].created_at,
                title: res1.hits[0].title
            } : {},
            [query2]: res2.hits[0] ? {
                created_at: res2.hits[0].created_at,
                title: res2.hits[0].title
            } : {}
        };
        res.json(result);
    }
    catch (error) {
        res.status(500).send('Error');
    }
});

app.use('', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));