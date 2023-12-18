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
const app = express();
const port = 3000;

app.get("/hw2", (req, res) => {
    const q1 = req.query.query1;
    const q2 = req.query.query2;
    const url1 = `https://hn.algolia.com/api/v1/search?query/${q1}&tags=story`
    const url2 = `https://hn.algolia.com/api/v1/search?query/${q2}&tags=story`
    Promise.all([
        fetch(url1).then(response => response.json()),
        fetch(url2).then(response => response.json())
    ])
    .then(results => {
        res.status(200).json(Object.fromEntries(
            Object.entries({[q1]: results[0]["hits"][0], [q2]: results[1]["hits"][0]})
                .map(([key, {created_at, title}]) => [key, {created_at, title}])
        ));
    })
});

app.listen(port, () => {
  console.log("Listening port 3000 !");
});