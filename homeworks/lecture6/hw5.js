// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function printer(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }
  printer(1).then(() => printer(2)).then(() => printer(3));
}
print();
// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printer(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000);
    });
  }
  nums.reduce((promise, num) => {
    return promise.then(() => printer(num));
  }, Promise.resolve());
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function lightOn(color, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(color);
      resolve();
    }, delay);
  });
}
let isWorking = true;
async function trafficLight() {
  // your code here
  let color = ['red', 'green', 'yellow'];
  while (isWorking) {
    for (let i = 0; i < color.length; i++) {
      await lightOn(color[i], 1000);
    }
  }
}
function stop() {
  isWorking = !isWorking;
}
trafficLight();
let delayTime = 10000;
setTimeout(stop, delayTime);
