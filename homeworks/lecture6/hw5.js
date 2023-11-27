// 1. use `promise` to print 1, 2, 3 in every 1 second
function print() {
  // your code here
  function a(data){
    return new Promise(resolve =>{
      console.log(data);
      setTimeout(() => a(data+1),1000);
    })
  }
  a(1);
}
print();

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  var p = function(num){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log(num);
        // reject();
        resolve();
      },1000);
    })
  }
  var f = async function(nums){
    nums.reduce( async (accumulator, num) => {
      await accumulator;
      await p(num);
    },Promise.resolve());
  }
  f(nums);
}
printList();

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
const lights = ['red', 'green', 'yellow'];
function trafficLight() {
  // your code here
  var p = function(light){
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        console.log(light);
        resolve();
      },3000);
    })
  }
  var f = async function(lights){
    while(true){
      await lights.reduce( async (accumulator, light) => {
        await accumulator;
        await p(light);
      },Promise.resolve());
    }
    
  }
  f(lights);

}
trafficLight()
