// 1. use `promise` to print 1, 2, 3 in every 1 second
function newWait(delay = 1000) {
  return new Promise((res, rej) => {
    setTimeout(res, delay);
  });
}
function print() {
  // your code here
  newWait(0).then(() => {
    console.log(1);
    return newWait();
  }).then(() => {
    console.log(2);
    return newWait();
  }).then(() => {
    console.log(3);
  });
}

//print();
// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  nums.reduce((acc, curr) =>
    acc.then(() => {
      console.log(curr);
      return newWait();
    })
    , newWait(0));
}
//printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  // your code here
  let colors = ["red", "green", "yellow"];

  colors
    .reduce((acc, curr) =>
      acc.then(() => {
        console.log(curr);
        return newWait();
      }), newWait(0))
    .then(() => trafficLight());

}
//trafficLight();