//1
Promise.resolve(1)
    .then(res => {
        console.log(res);
        return 2;
    })
    .catch(err => {
        return 3;
    })
    .then(res => {
        console.log(res);
    });
//It will print 1 2
//First it resolve with value 1, then print 1 and resolve with value 2
//There is no error so the catch block is skipped.
//The last then block receive the last resolved value, which is 2, and print it.

// // 2
Promise.reject(1)
    .then(res => {
        console.log(res);
        return 2;
    })
    .catch(err => {
        console.log(err);
        return 3;
    })
    .then(res => {
        console.log(res);
    });
//The output are 1 3.
//It creates a rejected project with value 1. and the next then block is skipped.
//the catch block can catch any errors, so it begin executes, and print 1, return value 3.
//The resolved promise with value 3 passes to the next then block and print 3.

//3
function runAsync(x) {
    const p = new Promise(resolve =>
        setTimeout(() => resolve(x), 1000)
    );
    return p;
}

function runReject(x) {
    const p = new Promise((resolve, reject) =>
        setTimeout(() => reject(`Error: ${x}`), 1000 * x)
    );
    return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
    .then(res => console.log(res))
    .catch(err => console.log(err));

//When using Promise.all, it takes an array of promises and returns a single promise that resolves when all promises in the array have resolved, or rejects.
//It creates 4 promise, and four asynchronous function.
//1. Resolved with value 1, execute in 1s
//2. Reject with 'Error: 4', execute in 4s
//3. Resolved with value 3, execute in 1s
//4. Reject with 'Error: 2', execute in 2s
//Promise.all will process these promises concurrently.
//If any of the promises passed to Promise.all is rejected,
//Promise.all immediately rejects with that reason, without waiting for the rest of the promises to complete.
//The first and third execute first, but they should wait before all promises are resolved.
//The fourth one rejects, so it skips the second promise and then and execute catch block. print Error: 2.