const https = require('https');
/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
function sequencePromise(urls) {
  const results = [];
  function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    return getJSON(url).then(response => results.push(response));
  }
  /**
   * getJSON(url1).then(response => results.push(response))
   * .then(()=> getJSON(url2).then(response => results.push(response)))
   * .then(()=> getJSON(url3).then(response => results.push(response)))
   * 
   */
  // implement your code here
  return urls.reduce((acc, curr) => acc.then(() => fetchOne(curr)), Promise.resolve()).then(() => results);
}


// option 1
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

sequencePromise(urls).then((data) => console.log(data.length));