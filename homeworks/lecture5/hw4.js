// what is the output? and explain why?

// 1
/**
 * Promise.resolve(1) creates a Promise that is immediately resolved with the value 1.
 * The first .then is executed with res being 1, and console.log(res) prints 1. It then returns 2.
 * The .catch is skipped since there's no error in the preceding Promises.
 * The second .then receives 2 (the returned value from the previous .then) and logs it.
 */
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

// // 2
/**
 * Promise.reject(1) creates a Promise that is immediately rejected with the value 1.
 * The first .then is skipped because the Promise is rejected.
 * The .catch handles the rejection, logging the error 1, and returns 3.
 * The second .then receives 3 (the returned value from .catch) and logs it.
 */
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

//3
/**
 * Promise.all is used to wait for all promises passed in the array to resolve, or for any to be rejected.
 * runAsync(1) and runAsync(3) are Promises that resolve after 1 and 3 seconds, respectively.
 * runReject(4) and runReject(2) are Promises that reject after 4 and 2 seconds, respectively.
 * Promise.all immediately rejects when any of the promises in the array reject. In this case, runReject(2) will reject first (after 2 seconds) with the message Error: 2.
 * The .then part is never reached because Promise.all is rejected, and the .catch handles this rejection by logging Error: 2.
 */
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
