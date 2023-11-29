// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}//print 5 five times with 1 second delay each

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}//print 0 1 2 3 4 with 1 second delay

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}//print 0 1 2 3 4 with 1 second delay

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}//I am another fn, before the 1s delay timeout, fn has been redefined

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//another obj, reason same as the previous one