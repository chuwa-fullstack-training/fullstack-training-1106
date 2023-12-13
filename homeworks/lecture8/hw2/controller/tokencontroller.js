const axios = require('axios');
async function compareResult(req, res){
    const query1 = req.query.query1;
    const query2 = req.query.query2;
    const resp1 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query1}&tags=story`);
    const resp2 = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query2}&tags=story`);
    let result = {};
    result[query1] = {"created_at": resp1.data.hits[0].created_at, "title": resp1.data.hits[0].title};
    result[query2] = {"created_at": resp2.data.hits[0].created_at, "title": resp2.data.hits[0].title};
    res.json(result);
}
module.exports = {
    compareResult
};