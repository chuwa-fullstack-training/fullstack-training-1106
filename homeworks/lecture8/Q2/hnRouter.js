const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { query1, query2 } = req.query;

    if (!query1 || !query2) {
      return res.status(400).json({ error: 'Both query1 and query2 are required' });
    }

    const result1 = await fetchData(query1);
    const result2 = await fetchData(query2);

    const finalResult = {
      [query1]: result1.hits[0],
      [query2]: result2.hits[0],
    };

    res.json(finalResult);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function fetchData(query) {
  const apiUrl = `https://hn.algolia.com/api/v1/search?query=${query}&tags=story`;
  const response = await axios.get(apiUrl);
  return response.data;
}

module.exports = router;
