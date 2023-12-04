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
const port = 3000;

app.get('/hw2', async (req, res) => {
  try {
    const { query1, query2 } = req.query;

    // Make requests to the Algolia API
    const result1 = await axios.get(`https://hn.algolia.com/api/v1/search`, {
      params: { query: query1, tags: 'story' },
    });

    const result2 = await axios.get(`https://hn.algolia.com/api/v1/search`, {
      params: { query: query2, tags: 'story' },
    });

    // Extract relevant data from the API responses
    const data1 = result1.data.hits[0];
    const data2 = result2.data.hits[0];

    // Create the final result object
    const finalResult = {
      [query1]: {
        created_at: data1.created_at,
        title: data1.title,
      },
      [query2]: {
        created_at: data2.created_at,
        title: data2.title,
      },
    };

    res.json(finalResult);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/hw2`);
});
