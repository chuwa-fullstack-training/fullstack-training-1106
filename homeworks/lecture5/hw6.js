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
    return getJSON(url).then(response => results.push(response));
  }
  // implement your code here

  const promises = [];
  for (const url of urls) {
    // console.log(url);
    promises.push(fetchOne(url));
  }
  promises.reduce(async (promise) => {
    return promise;
  }, Promise.resolve([]));
  return results;
}

// option 1
// function getJSON(url) {
//   // this is from hw5
// }

// option 2
async function getJSON(url) {
    return fetch(url).then(res => res.json());
}

// test your code
const urls = [
  'https://api.github.com/search/repositories?q=javascript',
  'https://api.github.com/search/repositories?q=react',
  'https://api.github.com/search/repositories?q=nodejs'
];

console.log(sequencePromise(urls));
