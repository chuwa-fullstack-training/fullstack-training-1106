// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(1);
      resolve();
    }, 1000); 
  }
  ).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(2);
        resolve();
      }, 1000);
    });
  }
  ).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(3);
        resolve();
      }, 1000);
    }); 
})
  }; 

print();
// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  function printNums(nums){
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(nums);
        resolve();
      }, 1000);
    });
  }
  nums.reduce((promise, num) => {
    return promise.then(() => printNums(num));
  }, Promise.resolve());

}
//printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  const colors = ['red', 'green', 'yellow'];
  let i = 0;
  setInterval(() => {
    console.log(colors[i]);
    i = (i + 1) % 3;
  }, 1000);
  
}
//console.log(trafficLight());
