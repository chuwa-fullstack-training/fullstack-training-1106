// what is the output in order? and explain why?

// 1
// console.log('a');
// setTimeout(() => console.log('b'), 0);
// console.log('c');
// new Promise((resolve, reject) => {
//   resolve('d');
//   reject('f');
  
//   console.log('e');
  
// }).then(result => console.log(result));
// .catch(e=> console.log(e));
// Shoule be 'a', 'c', 'e', 'd', 'f', 'b', because line 4, 5 and 7 are all in JS callstack,so
// a,c and e get printed out first and for resolve content, it is waiting in Callback Queue,
// and a promise can only have one state so it only resolve as resolve is earlier. As for setTimeout,
//it is put in Web Api stack, so will be executed at the last.

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

//1, start, success
// First, 22th line will be compiled first,
// and "then" in 27th will be put in Callback Queue waiting for resolve,
// next, 31st line will run in callstack and JS will fetch promise from Callbak Queue and print out the 'success' result.
