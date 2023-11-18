const https = require('https');
const { url } = require('inspector');
/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
async function sequencePromise(urls) {
  const results = [];
  async function fetchOne(url) {
    // for `getJSON` function you can choose either from the implementation of hw5 or `fetch` version provided by browser
    // if you use `fetch`, you have to use browser console to test this homework
    const response = await getJSON(url);
    return results.push(response);
  }
  // implement your code here
  for(const element of urls) {
    try {
      await fetchOne(element);
    } catch(e) {
      throw new Error(`${element} has error: ${e}`)
    }
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
  return new Promise((resolve, reject) => {
    const request = https.get(url, options, response => {
      if(response.statusCode !== 200) {
        const error = new Error(`status code is ${response.statusCode}`);
        response.resume();
        throw error;
      }
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      })
      response.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          throw new Error(`data cannot be pased to json: ${e}`);
        }
      })
    })
    request.on('error', (error) => {
      reject(error);
    })
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

sequencePromise(urls).then(results => console.log(results));
