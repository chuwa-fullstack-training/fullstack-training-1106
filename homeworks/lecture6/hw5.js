// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here

  function printNumber(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(number);
        resolve();
      }, 1000);
    });
  }

  // Using a loop to print 1, 2, 3 with a delay of 1 second between each number
  printNumber(1)
    .then(() => printNumber(2))
    .then(() => printNumber(3))
    .then(() => {
      console.log("Done");
    });

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

  function switchLight(color) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(color);
        resolve();
      }, 2000);
    });
  }

  function cycleLights() {
    colors.reduce(
      (promiseChain, currentColor) =>
        promiseChain.then(() => switchLight(currentColor)),
      Promise.resolve()
    )
      .then(() => {
        // Recursively call the function to keep the sequence going
        cycleLights();
      });
  }

  // Start the traffic light sequence
  cycleLights();
}
