// what is the output? and explain why?

// 1
// output: 1 2
// reason: 1. promise.resolve(1) execute and resolve first promise with 1
// 2. then block is executed, logging 1, return 2
// 3. catch block is skipped because no promise is rejected
// 4. second then block is executed, printing 2
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

// 2
// output: 1 3
// reason: 1. the first promise reject with error value "1"
// 2. first then block is skipped and catch block will execute
// 3. console.log(err); prints 1 and return new promise with resolve value "3" 
// 4. second then block is executed and console.log(res); prints 3
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

// 3
// output: "Error: 2"
// reason: 1.runAsync(1) execute and promise in runAsync(1) will execute
// 2. setTimeout will queue in macrotask queue (1 second)
// 3. runReject(4) execute and new promise in runReject(4) will execute
// 4. setTimeout will queue in macrotask queue (4 seconds)
// 5. runAsync(3) execute, setTimeout will queue in macrotask queue (3 seconds)
// 6. runReject(2) execute, setTimeout will queue in macrotask queue (2 second)
// 7. all setTimeout executes in order but (almost) at the same time
// 8. runAsync(1) resolve first with value 1
// 9. runReject(2) reject second with "Error 2"
// 10. Promise.all goes to .catch and output "Error 2"
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
