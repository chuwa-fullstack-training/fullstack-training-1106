// 1. use `promise` to print 1, 2, 3 in every 1 second
function print(number) {
  // your code here
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(number);
      resolve();
    }, 1000);
  });
}

print(1)
.then(()=>print(2))
.then(()=>print(3))
.catch((err)=>console.log(err));

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList(nums) {
  // your code here
  nums.reduce((pre, cur)=>{
    let next = pre.then(()=>print(cur));
    return next;
  },  Promise.resolve())
}
printList(nums);

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function wait(time){
  return new Promise(resolve => setTimeout(resolve, time));
}

async function trafficLight() {
  // your code here
  let colors = ['red','green','yellow'];
  let index = 0;
  for(let count= 0; count<=10; count++){
    await wait(1000);
    console.log(colors[index]);
    index = index==2 ? 0 : index+1;
  }
}

trafficLight();