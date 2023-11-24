// 1. use `promise` to print 1, 2, 3 in every 1 second
function timer_1s() {
  return new Promise(resolve => setTimeout(resolve, 1000))
}

async function print() {
  // your code here
  for (let num = 1; num <= 3; num++) {
    const start = performance.now();
    await timer_1s();
    const end = performance.now();
    console.log(num, `(${Math.floor(end - start)} ms passed)`);
  }
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

async function printList() {
  // your code here
  console.log('Print List');
  for (const num of nums) {
    const start = performance.now();
    await timer_1s();
    const end = performance.now();
    console.log(num, `(${Math.floor(end - start)} ms passed)`);
  }
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight(seconds) {
  // your code here
  console.log('Traffic Light');
  const colors = ["red", "green", "yellow"];
  let curr = 0;
  while (curr < seconds) {
    const start = performance.now();
    await timer_1s();
    const end = performance.now();
    console.log(colors[curr % 3], `(${Math.floor(end - start)} ms passed)`);
    curr++;
  }
}

async function runFunctions() {
  await print();
  await printList();
  await trafficLight(10);
}

runFunctions();