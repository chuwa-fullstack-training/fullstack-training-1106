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
  // implement your code here

  // Method 1:
  let promises = urls.map(url => fetchOne(url));

  return promises.reduce((promiseChain, currentPromise) => {
    return promiseChain.then(chainResults => 
      currentPromise.then(currentResult => chainResults.concat(currentResult))
    );
  }, Promise.resolve([])).then(res => console.log(res));


  // // Method 2: Promise.all
  // const promises = urls.map(url => fetchOne(url));
  // return Promise.all(promises).then(res => console.log(res));

  // // Method 3: Promise.allSettled
  // const promises = urls.map(url => fetchOne(url));
  // return Promise.allSettled(promises).then(res => console.log(res));


}

// option 1
function getJSON(url) {
  // implement your code here
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        'User-Agent': 'request'
      }
    };
    const request = https.get(url, options, response => {
      if (response.statusCode !== 200) {
        console.error(
          `Did not get an OK from the server. Code: ${response.statusCode}`
        );
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

console.log(sequencePromise(urls));