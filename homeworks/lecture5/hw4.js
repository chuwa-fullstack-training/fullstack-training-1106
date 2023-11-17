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
// Answer: 1 2
// Reason: the catch function will not be executed since there is no error in the Promise, so 3 will not be printed.



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

// Answer: 1 3
// Reason: the catch function will be executed since there is an error in the Promise, so 3 will be printed and 2 will not.


// 3
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

// Answer: Error: 2
// Reason: Promise.all will be executed after all Promises are executed.
// In this case runReject(2) will be executed after 2 seconds, so it will be the first error in the Promise.all.