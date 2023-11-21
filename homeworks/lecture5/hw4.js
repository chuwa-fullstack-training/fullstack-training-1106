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

// We firstly create a resolve promise and pass the value '1'.
// The function in first .then() will handle the value from resolve promise to output '1'
// and return a promise with value '2'.
// Since there is no error occurs, .catch() will be skip 
// and the second .then() will be executed to output '2'. 
// Hence, the output will be: 1 2


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

// We firstly create a reject promise and pass the value '1'.
// The function in .catch() will handle the value from reject promise to output '1'
// and return a promise with value '3'.
// The second .then() will handle the promise and output '3'. 
// Hence, the output will be: 1 3


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

// We use Promise.all() to handle a list of promises and wait for promises to be settled.
// If any of the promise is rejected, Promise.all() will be rejected and .catch() will be executed.
// As runReject(4) and runReject(2) will go to reject state, 
// the error message for the first reject promise will be output.
// As runReject(2) has shorter delay time, "Error: 2" will be output and Promise.all() will be completed.
// Hence, the output will be: Error: 2