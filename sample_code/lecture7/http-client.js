const http = require('http');

function requestJSON(url, callback) {
  http.get(url, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      callback(JSON.parse(data));
    });
  });
}

requestJSON('http://localhost:3000', data => {
  console.log(data);
});
