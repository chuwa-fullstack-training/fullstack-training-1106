console.log('start');

setTimeout(function () {
  console.log('timeout');
}, 1);

const fs = require('fs');

fs.readFile('demo.txt', function (err, data) {
    console.log('readFile');
});

console.log('end');
