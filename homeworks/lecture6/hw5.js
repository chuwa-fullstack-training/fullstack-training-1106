// 1. use `promise` to print 1, 2, 3 in every 1 second
async function pause(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

async function print(count) {
  while (count < 4) {
      await pause(1000);
      console.log(count);
      count++;
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printNumbers(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve()
      }, 1000)
    })
  }
  nums.reduce((myPromise, curVal) => {
    return myPromise.then(() => printNumbers(curVal))
  }, Promise.resolve())
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let colors = ['red', 'green', 'yellow'];
  let curr = 0;

  function switchColor() {
    console.log(colors[curr]);
    curr = (curr+1) % 3;
    setTimeout(() => {
      switchColor()
    }, 1000)
  }
  switchColor();
}
