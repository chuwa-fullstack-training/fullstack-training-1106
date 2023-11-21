// what is the output of the following code? and explain why?

// 1
for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}
// the output are 5 5 5 5 5 after 1 second, because the for loop execute 4 times and set 4 timeout function.
//So there are 4 console.log() waiting to be executed. i is a global variabls. when callbacks are executed the value of i is 5, so there are four 5.

// 2
for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
}
//The output are 0 1 2 3 4 after 1 second.
//This time, i is block scope, in each loop a new i is created.
//so the value of i within each callback corresponds to the value of i at the time the iteration was processed.

// 3
for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(() => console.log(i), 1000);
    })(i);
}
//The output is the same as 2.
//The IIFE( Immediately Invoked Function Expression ) can create a new scope for each iteration. And the current value of i is passed
//to the function, which preserves it for the setTimeout callback.

// 4
let fn = () => {
    console.log('I am fn');
}
setTimeout(fn, 1000);
fn = () => {
    console.log('I am another fn');
}
//The output is 'I am a fn' after 1 second.
//because the setTimeout record the reference of function which log('I am fn') Later fn()
//becomes a new reference to log 'I am another fn' but it doesn't influence the already scheduled reference in callbacks.

// 5
let obj = {
    name: 'obj',
}
setTimeout(() => console.log(obj), 1000);
obj.name = 'another obj';
//The output is '{ name: 'another obj' }'
//The setTimeout function records the reference of object, not its value, later the object's value changed.
//So when the callback function is executed after 1 second, the new object value is 'another obj'.