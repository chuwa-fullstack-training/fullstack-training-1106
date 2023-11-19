// // 1. use `promise` to print 1, 2, 3 in every 1 second
// function print() {
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(1);
//       resolve();
//     }, 1000);
//   })
//   .then(() => new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(2);
//       resolve();
//     }, 1000);
//   }))
//   .then(() => new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(3);
//       resolve();
//     }, 1000);
//   }));
// }

// print();

// // improved: print every single numbers in a list in every 1 second
// // hint: `reduce`
// const nums = [3, 1, 6, 9, 2];

// function printList() {
//   nums.reduce((promise, num) => {
//     return promise.then(() => new Promise((resolve) => {
//       setTimeout(() => {
//         console.log(num);
//         resolve();
//       }, 1000);
//     }));
//   }, Promise.resolve());
// }

// printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct

let keepRunning = true;

function changeLight(color, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(color);
      resolve();
    }, delay);
  });
}

async function trafficLight() {
  while (keepRunning) {
    await changeLight('Red', 1000);
    await changeLight('Green', 1000);
    await changeLight('Yellow', 1000);
  }
}

function stopTrafficLight() {
  keepRunning = false;
}

trafficLight();
setTimeout(stopTrafficLight, 10000); // Set time to stop after 10 seconds
