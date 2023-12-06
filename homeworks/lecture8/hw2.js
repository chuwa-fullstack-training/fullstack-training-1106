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
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// function getJSON(url){
//     return new Promise((resolve, reject)=>{
//         const options = {
//             headers:{
//                 'User-Agent': 'request'
//             }
//         }

//         const request = https.request(url, options, response=>{
//             if(response.statusCode !== 200){
//                 reject(`request to url: ${url} failed`);
//                 response.resume();
//                 return;
//             }

//             let data = '';
//             response.on('data', chunk=>data+=chunk);
//             response.on('end', ()=>{
//                 try{
//                     resolve(JSON.parse(data));
//                 }
//                 catch(e){
//                     reject(e);
//                 }
//             })
//             response.on('error', err=> reject(err));
//         })
//     });
// }

app.get('/hw2', async (req,res,next)=>{
    const getDetails = async ()=>{
        const results = {};
        for(let q of Object.values(req.query)){
            const u = new URL('https://hn.algolia.com');
            u.pathname = '/api/v1/search';
            u.search = `query=${q}&tags=story`;

            try{
                const {data} = await axios.get(u.toString());
                results[q] = {};
                results[q].author = data.hits[0].author;
                results[q].title = data.hits[0].title;
            }
            catch(e){
                console.log(e);
            }
        }

        return results;
    };

    const finalResults = await getDetails();
    res.status(200).type('application/json').send(finalResults);
});

app.listen(port, ()=>{console.log(`app is running on ${port}`);});
