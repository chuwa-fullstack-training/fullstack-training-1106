// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then(res => {
    console.log(res); // log value 1
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res); // log value 2
  });
// Output: 1, 2
// The first promise logs 1, after that, the second promise executes, then logs 2

// 2
Promise.reject(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    console.log(err); // Promise reject to catch block, logs 1, return 3
    return 3;
  })
  .then(res => {
    console.log(res); // .then callback logs 3
  });
// Output: 1, 3


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

// Output: Error: 2
// Promise.all takes an array of promises and waits for all of them to resolve or for on to reject
// Since runReject(2) is firstly rejected, so the promise will be rejected to the catch block which is Error: 2