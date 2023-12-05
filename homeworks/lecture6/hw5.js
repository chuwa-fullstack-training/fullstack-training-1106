// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000);
  })
  .then(() => new Promise((resolve) => {
    setTimeout(() => {
      console.log(2);
      resolve();
    }, 1000);
  }))
  .then(() => new Promise((resolve) => {
    setTimeout(() => {
      console.log(3);
    }, 1000);
  }));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((promise, num) => {
    return promise.then(() => new Promise(resolve => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }));
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  function changeLight(color, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, delay);
    });
  }

  function cycle() {
    changeLight('red', 300)
    .then(() => changeLight('green', 1200))
    .then(() => changeLight('yellow', 1500))
    .then(cycle); // Recursively call cycle to repeat the process
  }

  cycle();
}
