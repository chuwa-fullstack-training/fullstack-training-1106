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
//The output is a c e d b.
//First it execute the first line synchronously, print a
//Then there is an asynchronous function setTimeout, it waits 0 ms, and then place
//log function into the callback queue. the log function is not executed immediately.
//Then it prints c synchronously.
//A promise is created and executed synchronously, inside the promise, the promise is
//resolved with the value 'd'. Once a promise is settled(either resolved or rejected)
//its state cannot chang, so subsequent reject is invalid.
//then it prints e synchronously
//.then(...) place callback in microtask queue.
//After the synchronous execution, JS checks the microtask queue and print d
//Finally setTimeout in macrotask queue is executed and print b

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
//The output is 1 start success.
//First fn create a new Promise, this is executed synchronously. Inside the promise, it executes print 1.
//and then the promise is resolved with the value 'success'.
//.then(...) is placed in microtask queue and wait.
//print start.
//JS checks the callback queue, print success.