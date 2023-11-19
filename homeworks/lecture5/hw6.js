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
    return getJSON(url).then(response => response);
  }
  // implement your code here
  return Promise.allSettled(urls.map(val => fetchOne(val)));
}

// option 2
function getJSON(url) {
  return fetch(url).then((res) => res.json());
}

// test your code
const urls = [
  "https://api.github.com/search/repositories?q=javascript",
  "https://api.github.com/search/repositories?q=react",
  "https://api.github.com/search/repositories?q=nodejs",
];

sequencePromise(urls)
  .then(r => console.log(JSON.stringify(r)))