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
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.get("/hw2", async (req, res) => {
  const { query1, query2 } = req.query;
  const res1 = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`
  );
  const res2 = await fetch(
    `https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`
  );
  const hits1 = (await res1.json()).hits[0];
  const hits2 = (await res2.json()).hits[0];
  const response = {};
  response[query1] = {};
  response[query2] = {};
  response[query1].created_at = hits1.created_at;
  response[query1].title = hits1.title;
  response[query2].created_at = hits2.created_at;
  response[query2].title = hits2.title;
  console.log(response);
  res.status(200).json(response);
});

app.listen(3000, () => console.log("Sever listen on 3000"));
