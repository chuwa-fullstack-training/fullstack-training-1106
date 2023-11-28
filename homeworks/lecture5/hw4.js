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
/*
  * 1
  * 2
  * The promise is resolved, so the first then callback is executed. Return 2 means the promise is resolved with a value of 2.
  * The second then callback is executed and returns 2.
  */

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
  /*
  * 1
  * 3
  * The promise is rejected, so the catch callback is executed. The catch block logs the error (1) and returns a resolved promise with the value 3.
  * The second then callback is executed and returns 3.
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
/*
  * Error: 2
  * The promise is rejected, so the catch callback is executed. The catch block logs the error (1) and returns a resolved promise with the value 3.
  * The second then callback is executed and returns 3.
  */