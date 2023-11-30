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
  // 1 2
  // because the promise is resolved immediately, and the first .then() prints '1' and returns resolved promise "res" with value 2
  // then the second .then() prints 2
  // .catch() is not executed because there is no error

// 2
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
// 1 3
// because the promise is rejected immediately, and the .catch() prints '1' and returns resolved promise "err" with value 3
// then the second .then() prints 3

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
// Error: 2 
// the Promise.all will be rejected if one of the promises is rejected, its output will be the first rejected promise
// because the runReject(2) is the first rejected promise, the output will be Error: 2
