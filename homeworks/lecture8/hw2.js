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

app.get('/hw2', (req, res) => {
    const { query1, query2 } = req.query;

    // Function to make an HTTP GET request
    function fetchFromAPI(query) {
        return new Promise((resolve, reject) => {
            const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`;
            https.get(url, (resp) => {
                let data = '';

                // A chunk of data has been recieved.
                resp.on('data', (chunk) => {
                    data += chunk;
                });

                // The whole response has been received.
                resp.on('end', () => {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(e);
                    }
                });
            }).on("error", (err) => {
                reject(err);
            });
        });
    }

    // Fetch data for both queries and construct the response
    Promise.all([fetchFromAPI(query1), fetchFromAPI(query2)])
        .then(([data1, data2]) => {
            const result1 = data1.hits[0] ? { created_at: data1.hits[0].created_at, title: data1.hits[0].title } : {};
            const result2 = data2.hits[0] ? { created_at: data2.hits[0].created_at, title: data2.hits[0].title } : {};

            res.json({
                [query1]: result1,
                [query2]: result2
            });
        })
        .catch(error => {
            res.status(500).send("Error fetching data from API: " + error.message);
        })
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
})
