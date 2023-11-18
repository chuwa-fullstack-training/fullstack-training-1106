// change http request into promise-based function

const https = require('https');

// function httpsRequest(url) {
//   const options = {
//     headers: {
//       'User-Agent': 'request'
//     }
//   };
//   const request = https.get(url, options, response => {
//     if (response.statusCode !== 200) {
//       console.error(
//         `Did not get an OK from the server. Code: ${response.statusCode}`
//       );
//       response.resume();
//     }

//     let data = '';
//     response.on('data', chunk => {
//       data += chunk;
//     });
//     response.on('end', () => {
//       try {
//         // When the response body is complete, we can parse it and log it to the console
//         console.log(JSON.parse(data));
//       } catch (e) {
//         // If there is an error parsing JSON, log it to the console and throw the error
//         throw new Error(e.message);
//       }
//     });
//   });
//   request.on('error', err => {
//     console.error(
//       `Encountered an error trying to make a request: ${err.message}`
//     );
//   });
// }

function getJSON(url) {
  // implement your code here
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

getJSON('https://api.github.com/search/repositories?q=javascripts')
  .then(response => console.log(response.items.length)) // output: 30
  .catch(err => console.log(err)); // if you remove options from https.get parameters, you might see an error
