const https = require('https');

function getJSON(url) {
  const options = {
    headers: {
      'User-Agent': 'request'
    }
  };

  return new Promise((resolve, reject) => {
    const request = https.get(url, options, response => {
      if (response.statusCode !== 200) {
        console.error(`Did not get an OK from the server. Code: ${response.statusCode}`);
        response.resume();
        reject(`Server responded with status code ${response.statusCode}`);
        return;
      }

      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (e) {
          reject(`Error parsing JSON: ${e.message}`);
        }
      });
    });

    request.on('error', err => {
      console.error(`Encountered an error trying to make a request: ${err.message}`);
      reject(`Request error: ${err.message}`);
    });
  });
}

/**
 * Write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - An array of urls
 * @returns {Promise<any[]>} - A promise resolving to an array of responses
 */
function sequencePromise(urls) {
  const results = [];

  // Helper function to fetch one URL and push the result to the results array
  function fetchOne(url) {
    return getJSON(url).then(response => results.push(response));
  }

  // Chain the promises in sequence using reduce
  const sequencePromise = urls.reduce((previousPromise, url) => {
    return previousPromise.then(() => fetchOne(url));
  }, Promise.resolve());

  // Return the final promise
  return sequencePromise.then(() => results);
}

// Example usage:
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

sequencePromise(urls)
  .then(responses => console.log(responses))
  .catch(err => console.error(err));
