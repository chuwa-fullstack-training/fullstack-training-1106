// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function promiseCall(num) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    }).then(() => {
      promiseCall(num !== 3 ? num + 1 : 1);
    });
  }

  promiseCall(1);
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((accumulator, num, index) => {
    return accumulator.then(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(num);
            resolve();
          }, 1000);
        })
    );
  }, Promise.resolve());
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const lights = ["red", "green", "yellow"];
  function promiseCall(num) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(lights[num]);
        resolve();
      }, 1000);
    }).then(() => {
      promiseCall(num !== 2 ? num + 1 : 0);
    });
  }

  promiseCall(0);
}
