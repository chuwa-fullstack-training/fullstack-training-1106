// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(val) {
  // your code here
  return new Promise(resolve =>
    setTimeout(() => {
      console.log(val);
      resolve();
    }, 1000)
  );
}

(async function () {
  for (let i = 1; i <= 3; i++) {
    await print(i);
  }
})();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce(async (promise, val) => {
    return await promise.then(() => {
      return print(val);
    })
  }, Promise.resolve());
}

printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
async function trafficLight() {
  // your code here
  const light = ["red", "green", "yellow"]
  let count = 0;
  while (true) {
    count = count % light.length;
    await print(light[count++]);
  }
}

trafficLight();
