// 1. use `promise` to print 1, 2, 3 in every 1 second
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function print() {
  // your code here

  for (let i = 1; i < 4; i++) {
    await delay(1000);
    console.log(i)
  }
}

print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

async function printList(nums) {
  // your code here
  //方法1:
  for (let i = 0; i < nums.length; i++) {
    await delay(1000);
    console.log(nums[i])
  }
  // 方法2:
  //   nums.reduce((promise, num) => {
  //     return promise.then(() => {
  //       console.log(num);
  //       return delay(1000);
  //     });
  //   }, Promise.resolve());
}
printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight(time) {
  // your code here
  var traffic_lights = ["red", "green", "yellow"]
  for (let i = 0; i < time; i++) {
    await delay(1000);
    console.log(traffic_lights[i % 3]);
  }
}
trafficLight(10);