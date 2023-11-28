// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  function printNumbers(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve();
      }, 1000)
    })
  }
  
  let myPromise = Promise.resolve();
  for(let i = 1; i<=3; i++){
    myPromise = myPromise.then(()=> printNumbers(i))
  }
  return myPromise;
}

print();



// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  function printNumbers(num){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(num);
        resolve()
      }, 1000)
    })
  }
  nums.reduce((myPromise, curVal) => {
    return myPromise.then(() => printNumbers(curVal))
  }, Promise.resolve())
  
}

printList();



// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight() {
  let colors = ['red', 'green', 'yellow'];
  let index = 0;

  function changeColor() {
    console.log(colors[index]);
    index = (index+1) % colors.length;
    setTimeout(() => {
      changeColor()
    }, 1000)
  }
  changeColor();
}


trafficLight()