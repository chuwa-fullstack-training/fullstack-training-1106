const express = require('express');
const router = express.Router();

const searchQuery = query => {
  return fetch(`https://hn.algolia.com/api/v1/search?query=${query}&tags=story`)
    .then(response => response.json())
    .then(data => data.hits[0])
    .then(hit => {
      return {
        created_at: hit.created_at,
        title: hit.title
      }
    })
};

router.get('/hw2', async (req, res) => {
  const query1 = req.query.query1; 
  const query2 = req.query.query2;
  if (!query1 || !query2) {
    return res.status(400).json({ error: 'please enter valid queries' });
  }
  const response = {
    [query1]: await searchQuery(query1),
    [query2]: await searchQuery(query2)
  }
  res.json(response);
});

router.get('*', (req, res) => {
  res.status(404).end('This is the 404 page');
});

module.exports = router;
