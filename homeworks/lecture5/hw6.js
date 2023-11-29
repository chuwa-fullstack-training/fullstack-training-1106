/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
const https = require('https');
function sequencePromise(urls) {
  // initial resolved promise, starting point of the sequence promise chain
  let promiseChain = Promise.resolve();
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here
  // make sure the previous promise is resolved before next promise gets executed, then append to the promiseChain
  urls.map(url => promiseChain = promiseChain.then(() => fetchOne(url)));
  // after all promises are executed, then return the results
  return promiseChain.then(() => results);
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
        response.resume(); // Consume response data to free up memory
        return;
      }

      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          // When the response body is complete, we can parse it and resolve it
          resolve(JSON.parse(data));
        } catch (e) {
          // If there is an error parsing JSON, reject it and throw the error
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
// after all promises are executed, then print out the results
sequencePromise(urls)
  .then(results => console.log(results))
  .catch(error => console.error(error));