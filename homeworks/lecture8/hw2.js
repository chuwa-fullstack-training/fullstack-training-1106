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
const https = require('https');
const express = require('express');
const app = express();

function getJSON(url) {
    // implement your code here
    const options = {
        headers: {
            'User-Agent': 'request'
        }
    };
    const result = new Promise((resolve, reject) => {
        const request = https.get(url, options, response => {
            if (response.statusCode !== 200) {
                response.resume();
                reject(new Error(
                    `Did not get an OK from the server. Code: ${response.statusCode}`
                ));

            }

            let data = '';
            response.on('data', chunk => {
                data += chunk;
            });
            response.on('end', () => {
                try {
                    // When the response body is complete, we can parse it and log it to the console
                    resolve(JSON.parse(data));
                } catch (e) {
                    // If there is an error parsing JSON, log it to the console and throw the error
                    reject(new Error(e.message));
                }
            });
        });
        request.on('error', err => {
            reject(new Error(
                `Encountered an error trying to make a request: ${err.message}`
            ));
        });
    });
    return result;
}

app.get("/hw2", (req, res) => {
    if ("query1" in req.query && "query2" in req.query) {
        const query1 = req.query.query1;
        const query2 = req.query.query2;
        let reqQueryStr = new URLSearchParams({ query: query1, tags: "story" }).toString();
        const obj = {};
        console.log(`query1: ${query1}, query2: ${query2}`);
        console.log(`query string: ${reqQueryStr}`);
        getJSON(`https://hn.algolia.com/api/v1/search?${reqQueryStr}`)
            .then((v) => obj[query1] = v.hits[0])
            .then(() => {
                reqQueryStr = new URLSearchParams({ query: query2, tags: "story" }).toString();
                console.log(`query string: ${reqQueryStr}`);
                return getJSON(`https://hn.algolia.com/api/v1/search?${reqQueryStr}`)
            })
            .then((v) => obj[query2] = v.hits[0])
            .then(() => {
                //console.log(JSON.stringify(obj));
                res.status(200).json(obj)
                return;
            }).catch((e) => { throw e });

    } else {
        res.send();
    }
    return;
});

app.all("*", (req, res) => {
    res.status(404).send("404");
});


app.listen(4000, () => {
    console.log("listening on 4000");
});