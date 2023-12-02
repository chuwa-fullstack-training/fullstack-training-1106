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
const app = express();
const port = 3000;

function getDataByPromise(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {

            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

app.get('/hw2', async (req, res) => {
    const query1 = req.query.query1;
    const query2 = req.query.query2;

    if (!query1 || !query2) return res.status(400).send("Both query1 and query2 are required");
    
    try {
        const response1 = await getDataByPromise(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
        const response2 = await getDataByPromise(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
        const result1 = response1.hits.length > 0 ? response1.hits[0] : {};
        const result2 = response2.hits.length > 0 ? response2.hits[0] : {};

        const finalResult = {
            [query1]: {
                created_at: result1.created_at,
                title: result1.title
            },
            [query2]: {
                created_at: result2.created_at,
                title: result2.title
            }
        };

        res.json(finalResult);
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(port, () => console.log(`Server running on local port: ${port}`));