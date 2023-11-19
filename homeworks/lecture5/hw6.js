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
    return getJSON(url).then(response => results.push(JSON.stringify(response)));
  }
  // implement your code here
  // use reduce to chain promises
  /**
   const promiseChain = Promise.resolve()
    .then(() => fetchOne('https://api.github.com/search/repositories?q=javascript'))
    .then(() => fetchOne('https://api.github.com/search/repositories?q=react'))
    .then(() => fetchOne('https://api.github.com/search/repositories?q=nodejs'));
   */
  const promiseChain = urls.reduce((prev, curr) => {
    return prev.then(() => fetchOne(curr));
  }, Promise.resolve());

  return promiseChain.then(() => { return results; });
}

// option 2
function getJSON(url) {
    return fetch(url).then(res => res.json());
}

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];


sequencePromise(urls)
  .then(res => console.log(res));