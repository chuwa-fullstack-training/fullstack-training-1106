console.log('Start');

setTimeout(() => {
  console.log('1');
  new Promise(resolve => {
    console.log('1.5');
    resolve('1.6');
  }).then(data => console.log(data));
}, 1000);

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => console.log('3'));

new Promise((resolve, reject) => {
  console.log('4');
  resolve('5');
}).then(data => console.log(data));

console.log('End');
