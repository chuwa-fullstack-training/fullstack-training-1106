// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  new Promise((resolve) => {
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => resolve(i), 1000);
    }
  
  })

}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here

}

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
