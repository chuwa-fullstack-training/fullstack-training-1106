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
const PORT = 3000;

// Function to fetch data from the Hacker News API
async function fetchData(query) {
  try {
    const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`);
    return response.data.hits[0]; // Return only the first result for simplicity
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}

// Express route for /hw2
app.get('/hw2', async (req, res) => {
  const { query1, query2 } = req.query;

  if (query1 && query2) {
    const result = {};

    try {
      // Fetch data for query1 and query2
      const [data1, data2] = await Promise.all([fetchData(query1), fetchData(query2)]);
      result[query1] = data1;
      result[query2] = data2;

      // Send the final result as JSON response
      res.json(result);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  } else {
    // Handle missing parameters
    res.status(400).send('Missing query parameters');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


