// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  function delay(i) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 1000);
    });
  }

  async function printWithDelay() {
    for (let i = 1; i <= 3; i++) {
      await delay(i);
    }
  }

  // Call the async function
  printWithDelay();

  // your code here
}
// print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  function delay(i) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 1000);
    });
  }
  async function printWithDelay(nums) {
    for(let num of nums){
      await delay(num);
    }
}
  printWithDelay(nums);
}
printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct


const lights = ['red','green','yellow'];

function trafficLight(lights) {
  // your code here
  function delay(i) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, 1000);
    });
  }
  async function Display(lights) {
    let i = 0;
    while(i<3) {
      await delay(lights[i]);
      i++;
      if(i === 3){
        i = 0;
      }

    }
}
  Display(lights);
}
// trafficLight(lights);