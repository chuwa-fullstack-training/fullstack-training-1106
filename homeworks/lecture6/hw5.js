// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(num) {
  // your code here
  return new Promise(res => {
      setTimeout(()=>{
        console.log(num)
        res();
      }, 1000)
  })
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  nums.reduce((acc, num, index) => {
    return acc.then(() => {
      return new Promise(resolve => {
        setTimeout(() => {
          console.log(num);
          resolve();
        }, 1000 * (index-index+1));
      });
    });
  }, Promise.resolve());
}


// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
const trafficLights = ['red','yellow','green'];
function trafficLight(trafficLights) {
  // your code here
  let index = 0;
  setInterval(()=>{
    console.log(trafficLights[index]);
    index++
    if (index === trafficLights.length){
      index = 0;
    }
    res();
  }, 1000)

}


// print(1)
//  .then(()=>print(2))
//  .then(()=>print(3))

// printList(nums)

// trafficLight(trafficLights)