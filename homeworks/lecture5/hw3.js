// what is the output in order? and explain why?

// 1
console.log("a");
setTimeout(() => console.log("b"), 0);
console.log("c");
new Promise((resolve, reject) => {
  resolve("d");
  console.log("e");
  reject("f");
}).then((result) => console.log(result));

// The Output:
// a
// c
// e
// d
// b
// Explaination: "console.log('a');" was put in the callstack firstly, and print"a".
// The setTimeOut is WebApi, this will be run after waiting in the callback queue.
// console.log('c'); was put in the callstack directly, and print "c".
// The promise was created and resolved with "d".
// console.log('e'); was put in the callstack.
// The then of the promise chain took "d" from previous promise and log it.
// "console.log("b"); was put into the callstack from callback queue, and log "b" in the console.

// 2
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

fn().then((res) => {
  console.log(res);
});

console.log("start");

// The output :
// 1
// start
// success

// Explaination:
// When the promise was created, "console.log(1) was put in callstack and log".
// Then console.log('start') was in callstack
// Finally, the then handler takes "success" as res and log it in the console.
