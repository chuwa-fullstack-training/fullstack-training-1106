// what is the output? and explain why?

// 1
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
/**
'1' - The promise resolves with 1, which is logged in the first then.
'2' - The first then returns 2, which is passed to the next then and logged.
 */
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
/**
'1' - The promise is rejected with 1, which is caught and logged in the catch.
'3' - The catch returns 3, which is passed to the next then and logged.
 */

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
//Error: 2
// Promise.all waits for all promises to resolve or for any to reject. The first promise to reject is runReject(2) 
//which takes 2000ms (2 * 1000ms). Since Promise.all fails fast on the first rejection, it rejects with the error 
//from runReject(2).
//The Promise.all does not wait for other promises (runAsync(1), runReject(4), runAsync(3)) to resolve or reject once 
//the first rejection is encountered. Hence, the output is the error message from the first rejecting promise