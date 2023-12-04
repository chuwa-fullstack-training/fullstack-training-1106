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
const PORT = 3000;

app.get('/hw2', async (req, res) => {
    try {
      const { query1, query2 } = req.query;
  
      const result1 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
      const result2 = await fetch(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
  
      const data1 = await result1.json();
      const data2 = await result2.json();
  
      const combinedResult = {
        [query1]: {
          created_at: data1.hits[0].created_at,
          title: data1.hits[0].title,
        },
        [query2]: {
          created_at: data2.hits[0].created_at,
          title: data2.hits[0].title,
        },
      };
  
      res.json(combinedResult);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


/**
 * http://localhost:3000/hw2?query1=apple&query2=banana
 * {"apple":{"created_at":"2023-06-05T19:04:46Z","title":"Apple Vision Pro: Apple’s first spatial computer"},
 * "banana":{"created_at":"2010-06-14T12:54:07Z","title":"Banana equivalent dose"}}
 * 
 * http://localhost:3000/hw2?query1=1234&query2=5678
 * {"1234":{"created_at":"2017-05-04T18:04:01Z","title":"Edge displays “123456” in PDF but prints “114447”"},
 * "5678":{"created_at":"2012-03-12T11:51:40Z","title":"Ask HN: Is there a standard for representing phone numbers in text?"}}
 */
