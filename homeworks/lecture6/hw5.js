// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function helper(i) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(i);
      }, 1000)
    });
  }

  helper(1)
    .then(r => {
      console.log(r);
      return helper(2);
    })
    .then(r => {
      console.log(r);
      return helper(3);
    })
    .then(r => {
      console.log(r);
    })
}

// solution using async await
async function print2() {
  function helper(i) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(i);
      }, 1000)
    });
  }

  console.log(await helper(1));
  console.log(await helper(2));
  console.log(await helper(3));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function helper(i) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(i);
      }, 1000)
    });
  }

  nums.reduce((acc, curr, ind) => {
    return acc.then(r => {
      if (ind > 0) { console.log(r); }
      return helper(curr);
    });
  }, Promise.resolve())
    .then(r => {
      console.log(r);
    });
}

// use async & await
async function printList2() {
  function helper(i) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(i);
      }, 1000)
    });
  }

  for (let i = 0; i < nums.length; i++) {
    console.log(await helper(nums[i]));
  }
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
let light = ["red", "green", "yellow"];
function trafficLight() {
  // recursive promise solution
  function helper(color) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(color);
      }, 1000)
    });
  }

  light.reduce((prev, curr, ind) => (
    prev.then(result => {
      if (ind > 0) { console.log(result); }
      return helper(curr);
    })
  ), Promise.resolve())
    .then(result => {
      console.log(result);
      trafficLight();
    })
}

// async await solution
async function trafficLight2() {
  function helper(color) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(color);
      }, 1000)
    });
  }

  while (true) {
    for (let i = 0; i < light.length; i++) {
      console.log(await helper(light[i]));
    }
  }
}
