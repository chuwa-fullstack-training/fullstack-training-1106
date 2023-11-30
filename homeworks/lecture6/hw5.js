// 1. use `promise` to print 1, 2, 3 in every 1 second
function delayPrint(msg, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, delay);
  });
}

function print() {
  // your code here
  delayPrint(1, 1000)
    .then(() => delayPrint(2, 1000))
    .then(() => delayPrint(3, 1000));
}

// test
// print();    // print 1, 2, 3 in every 1 second

// solution 2:
async function print1() {
  for (let i = 1; i <= 3; i++) {
    await delayPrint(i, 1000);
  }
}

// test
// print1();     // print 1, 2, 3 in every 1 second

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promiseChain, currentNumber) => {
    return promiseChain.then(() => delayPrint(currentNumber, 1000));
  }, Promise.resolve());
}

// test
// printList();     // print 3, 1, 6, 9, 2 in every 1 second

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  delayPrint('red', 1000)
    .then(() => delayPrint('green', 1000))
    .then(() => delayPrint('yellow', 1000))
    .then(trafficLight);
}

// trafficLight();     // output: red -> green -> yellow -> red -> ...