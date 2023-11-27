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
// Output:
// 1
// 2

// Reason: Promise.resolve(1) will create a promise and pass value 1 to its resolve callback function
// at the first .then(), res will get 1 from resolve(), so console.log(res) will output 1
// then "return 2" will create a promise with resolve(2)
// Since there is no error occurred, it will skip .catch()
// at the second .then(), res will get 2 from previous promise resolve(), so console.log(res) will output 2

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
// Output:
// 1
// 3

// Reason: Promise.reject(1) will create a promise and pass value 1 to its reject callback function
// at the first .then(), because the status of previous promise is reject, so it will be skipped.
// at .catch(), err will get 1 from reject(), so console.log(err) will output 1
// "return 3"  will create a promise with resolve(3)
// at the last .then(), res will get 3 from previous promise resolve(), so console.log(res) will output 3

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
// Output:
// Error: 2

// Reason: Promise.all will wait all promises in a list to be fulfilled. 
// If any of the promises is rejected, it will invoke .catch() rejected callback function for the first rejected promise.
// If all promises are fulfilled, it will invoke .then() fulfilled callback function.
// Obviously, runReject(x) will return a rejected promise after x seconds.
// runReject(2) will be the first one catched by the .catch() callback function.
// reject will pass 'Error: 2' to the parameter err, so console.log(err) will output Error: 2.
