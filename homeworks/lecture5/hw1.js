// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
// First the statement forloop will be executed totally in stack and exit while setting i=5,
// then the compiler will look for microtasks queue, as there is nothing, it will go to macrotasks queue
// and here there are five setTimeout..., then it execute a setTime out and console.log(6) will be put into
// microtasks queue and so and so for. So, finally we have five 5s printed out.

// 2
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 1000);
}
//Differentiated with the last one let is a local variable, it has no hoisting effect, so the value value of 
//i is just a primitive number, so 0--4 will be printed out.

// 3
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => console.log(i), 1000);
  })(i);
}
// I guess for function, if the input parameter is a number it just pass a primitive value,
// however for console.log it pass a pointer?

// 4
let fn = () => {
  console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
  console.log('I am another fn');
}
// the first fn and secend fn will be executed first as they are in stack, next setTimeout will be run
// however in that case, the first fn has been overwritten.

// 5
let obj = {
  name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';

// obj.name has a higher priority than setTimeout because it will run in the script level.