// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// The output: it will print 5 for 5 times.
// The var i is already 5 after 1s so that it will console.log(5) for 5 setTimeOut. If you expect answer like 0, 1, 2, 3, 4, you should use iife or change var to let.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// The output: it will print 0, 1, 2, 3, 4.
// It's similar to the previous question except using let to declare i; By using let, each iteration has own block-scoped i.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// The output: it will print 0, 1, 2, 3, 4.
// By using IIFE, every setTimeOut was executed with

// 4
let fn = () => {
  console.log("I am fn");
};
setTimeout(fn, 1000);
fn = () => {
  console.log("I am another fn");
};
// The output: I am another fn.
// The fn was defined with "I am fn", but then it was changed to "I am another fn". After 1s, it will execute new fn, so the output is "I am another fn".

// 5
let obj = {
  name: "obj",
};
setTimeout(() => console.log(obj), 1000);
obj.name = "another obj";
// The output : "another obj".
// The name was changed after 1s delay so that it will log "another obj".
