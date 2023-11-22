/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
const https = require('https');
async function sequencePromise(urls) {
    const results = [];
    function fetchOne(url) {
        // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
        // if you use `fetch`, you have to use browser console to test this homework
        return getJSON(url).then(response => results.push(response));
    }

    for(const url of urls){
        await fetchOne(url);
    }
    // implement your code here

    return results;
}

// option 1
function getJSON(url) {
    // this is from hw5
    return new Promise((resolve, reject) => {
        const options = {
            headers: {
                'User-Agent': 'request'
            }
        };
        const request = https.get(url, options, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`Did not get an OK from the server. Code: ${response.statusCode}`));
                response.resume();
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
            reject(new Error(`Encountered an error trying to make a request: ${err.message}`));
        });
    });
}

// option 2
// function getJSON(url) {
//     return fetch(url).then(res => res.json());
// }

// test your code
const urls = [
    'https://api.github.com/search/repositories?q=javascript',
    'https://api.github.com/search/repositories?q=react',
    'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls)
    .then(results => {
        console.log(results); // 这里处理并打印结果数组
    })
    .catch(error => {
        console.error('Error:', error); // 这里处理任何可能发生的错误
    });
