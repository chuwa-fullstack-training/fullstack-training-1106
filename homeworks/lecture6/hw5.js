// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  printNumber(1, 1000)
  .then(() => printNumber(2, 1000))
  .then(() => printNumber(3, 1000));
}

function printNumber(number, delay) {
  return new Promise(resolve => setTimeout(() => {
    console.log(number);
    resolve();
  }, delay));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => printNumber(num, 1000));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  while (true) {
    console.log('red');
    await delay(1000);
    console.log('green');
    await delay(1000);
    console.log('yellow');
    await delay(1000);
  }
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
