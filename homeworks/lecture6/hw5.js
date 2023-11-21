// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  Promise.resolve()
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(1);
        resolve();
      }, 1000)
    })
  })
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000)
    })
  })  
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000)
    })
  })
  .catch(error => console.log);
}

// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce(async (prom, element) => {
    return prom.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(element);
          resolve();
        }, 1000);
      });
    })
  }, Promise.resolve())
}

// printList();
// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let lastLight = "yellow";
  let prom = Promise.resolve();
  function update() {
    return new Promise((resolve) => {
      let currLight;
      switch(lastLight) {
        case "yellow":
          currLight = "red";
          break;
        case "red":
          currLight = "green";
          break;
        case "green":
          currLight = "yellow";
      }
      setTimeout(() => {
        console.log(currLight);
        lastLight = currLight;
        resolve();
      }, 5000)
    })
  }
  function run() {
    return prom.then(update).then(run);
  }
  run();
}

trafficLight();
