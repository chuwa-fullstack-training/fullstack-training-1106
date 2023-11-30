// what is the output of the following code? and explain why?

// 1
// console.log('Problem 1');
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// output:
// 5
// 5
// 5
// 5
// 5
// Reason: cuz it var, so this variable will be auto hoisted to the top of the function scope
//         then it will wait for the setTimeout to finish (while loop is running, i will use O(1) time to finish 1->5)
//         then it will print out the value of i (which is 5) 5 times
// 2
// console.log('Problem 2');
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 0->1->2->3->4
// Reason: cuz it let, so it will create a new variable i for each loop
//         then it will wait for the setTimeout to finish (while loop is running, i will use O(1) time to finish 0->4)
// 3
// console.log('Problem 3');
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// Output: 0->1->2->3->4
// Reason: cuz its IIFE, so it will create a new variable i for each loop
//         then it will wait for the setTimeout to finish (while loop is running, i will use O(1) time to finish 0->4)


// 4
// console.log('Problem 4');
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// Output: I am fn
// Reason: when setTimeout(fn, 1000) is called, fn is forwared to use the original fn
//         then it will wait for 1 second to print out I am fn
//         then the fn function is changed to another fn, but it is not called
// 5
// console.log('Problem 5');
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
// Output: { name: 'another obj' }
// Reason: cuz in js, obj will be passed by reference, so before the setTimeout is called, obj.name is "obj"
//         but when setTimeout is called, obj.name is changed to "another obj"
//         then it will wait for 1 second to print out { name: 'another obj' }
// 5
// 5
// 5
// 5
// 5
// 0
// 1
// 2
// 3
// 4
// 0
// 1
// 2
// 3
// 4
// I am fn
// { name: 'another obj' }