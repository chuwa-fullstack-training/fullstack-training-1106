const { log } = require('console');
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'demo.txt');
// log('start');
// async
fs.writeFile(fileName, 'Hello World', err => {
  if (err) {
    throw err;
  } else {
    log('The file has been saved!');
  }
});
// log('after write');

fs.readFile(fileName, { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  } else {
    log(data);
  }
});

// sync
try {
  fs.writeFileSync(fileName, 'Hello World');

  let result = fs.readFileSync(fileName, { encoding: 'utf8' });
  log('reaf file sync', result);
  log('end');
} catch (err) {
  console.log(err.message);
}
