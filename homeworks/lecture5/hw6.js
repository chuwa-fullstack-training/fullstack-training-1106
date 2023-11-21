// option 1
// Use getJSON from hw5
const getJSON = require('./hw5')

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

  const chainedPromises = urls.reduce((promiseChain, url) => {
    return promiseChain.then(() => fetchOne(url));
  }, Promise.resolve());


  return chainedPromises.then(() => results);
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
//   .then(responses => console.log(responses))
.then(responses => console.log(JSON.stringify(responses, null, 1)))
.catch(error => console.error(error));
