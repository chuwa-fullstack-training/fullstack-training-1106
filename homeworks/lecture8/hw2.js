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

async function fetchAlgoliaData(query) {
    const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story`;
    try {
        const response = await axios.get(url);
        if (response.data.hits && response.data.hits.length > 0) {
            return {
                created_at: response.data.hits[0].created_at,
                title: response.data.hits[0].title
            };
        }
        return {};
    } catch (error) {
        console.error(`Error fetching data for query: ${query}`, error);
        return {};
    }
}

app.get('/hw2', async (req, res) => {
    const query1 = req.query.query1;
    const query2 = req.query.query2;

    if (!query1 || !query2) {
        res.status(400).send('Both query1 and query2 are required');
        return;
    }

    const result1 = await fetchAlgoliaData(query1);
    const result2 = await fetchAlgoliaData(query2);

    const result = {
        [query1]: result1,
        [query2]: result2
    };

    res.json(result);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
