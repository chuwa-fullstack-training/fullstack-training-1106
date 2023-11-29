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
// The output will be
// 1
// 2
//
// The first resolve will pass the res: 1 and then return 2 as second res to the next .then
// catch won't catch anything as there are no rejects.

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
// The output will be
// 1
// 3
//
// The first line of code a promise reject and pass down a res: 1, which will be caught by .catch
// and return a res: 3 to the next .then because of the promise chain.

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
// This line of code will print out 'Error: 2'. This is because the promise.all is going to 
// return the first reject promise of the input array of promises. In this code, the runReject
// function will throw reject errors, and by looking into the code we can see the reReject(2)
// will execute after 2 seconds which is faster than the runReject(4). Therefore, runReject(2)
// will be caught by the .catch and the promise.all will terminate.