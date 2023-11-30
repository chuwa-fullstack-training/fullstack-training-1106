// what is the output in order? and explain why?

// 1
console.log('a');
setTimeout(() => console.log('b'), 0);
console.log('c');
new Promise((resolve, reject) => {
  resolve('d');
  console.log('e');
  reject('f');
}).then(result => console.log(result));
// 'a', 'c', 'e', 'd', 'b'
// 1st we met console.log('a') and will print it out directly
// 2nd we met setTimeout, we will throw the timeout to the process stack and move on
// 3rd we met console.log('c') and will print it out directly
// 4th we get into the promise and throw the resolve('d') into process stack
// 5th we met console.log('e') and will print it out
// 6th we met reject('f') and will throw in the process stack
// 7th 'd' got resolved and will console.log as result in .then()
// 8th 'b' finished timeout and went back to the waiting queue and print out by console.log

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

fn().then(res => {
  console.log(res);
});

console.log('start');

// 1, 'start', 'success'
// because fn created a function but not run it, when we run it, it will process line by line
// the first met is the console.log(1) which will print directly
// the second met is resolve('success') but as we need to resolve it, it will be throw into the stack
// the third met is console.log(start) and will print directly
// then the 'success' will be resolved and pass to .then() and console.log(res) will print it out