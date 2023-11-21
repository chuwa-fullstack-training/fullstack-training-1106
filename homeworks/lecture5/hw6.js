/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */

import { get } from 'https';

async function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => 
      results.push(response));
  }
  // implement your code here
  var req = [];
  for(let u of urls){
     req.push(new fetchOne(u));
  }
  let tmp = await Promise.all(req);
  for(let i of tmp){
    results.push(tmp);
  }
  return results;
  
}

// option 1
function getJSON(url) {
  // this is from hw5
  const options = {
    headers: {
      'User-Agent': 'request'
    }
  };
return new Promise((resolve,reject) => {
const request = get(url, options, response => {
    if (response.statusCode !== 200) {
      reject(
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
  request.on('error', err => {
    reject(
      `Encountered an error trying to make a request: ${err.message}`
    );
  });
})
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
var res = await sequencePromise(urls)
console.log(res);