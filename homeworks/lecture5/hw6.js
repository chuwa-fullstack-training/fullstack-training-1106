/**
 * write a function to have an arbitrary number of promises run in sequence
 * and return an array of the results
 * @param {string[]} urls - an array of urls
 * @returns {any[]} - an array of responses
 */
async function sequencePromise(urls) {
  const results = [];

  async function fetchOne(url) {
    try {
      const response = await getJSON(url);
      results.push(response);
    } catch (error) {
      console.error(`Error fetching ${url}: ${error.message}`);
    }
  }

  for (const url of urls) {
    await fetchOne(url);
  }

  return results;
}

// option 1
//function getJSON(url) {
  // this is from hw5
//}

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
