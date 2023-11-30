const delay = 1000 // 1 sec

// 1. use `promise` to print 1, 2, 3 in every 1 second
/** 
 * @param {any[]} nums - an array of content to be output
 * @param {number} offset - the delay offset
 */
function print(nums=[1, 2, 3], offset=0) {
  // your code here
  let idx = 0;
  return nums.reduce((p, curr) => {
    return p.then(res => new Promise(resolve => {
      idx += 1;
      setTimeout(() => console.log(res), idx * delay + offset);
      resolve(nums[idx]);
    }))
  }, Promise.resolve(nums[idx]));
}

// improved: print every single numbers in a list in every 1 second
// hint: `reduce`
const nums = [3, 1, 6, 9, 2];

function printList() {
  // your code here
  print(nums);
}

// 2. traffic light
// output: red -> green -> yellow -> red -> ...
// the delay time is up to you, but the order has to be correct
function trafficLight(round=3) {
  // your code here
  const colors = ["red", "green", "yellow"];
  res = print(colors);
  for (let i = 1; i < round; i++) {
    res = res.then(() => print(colors, i * delay * colors.length));
  }
}

// print();
// printList();
trafficLight();