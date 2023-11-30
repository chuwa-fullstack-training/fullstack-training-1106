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
// 1, 2
// we resolve 1 and pass to next
// we pass 1 as res, print it out and return 2 to next
// we don't catch any error, so jump through this
// we pass 2 as res, print it out

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

// 1 3
// we reject the promise and pass 1
// because we reject, it will jump direct to nearest catch, print out 1 and return 3
// then continue to print 3

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
// because Promise all is parallel promise that runs all promises at a time
// also, if some of the promise failed, it will fail for all
// so the runReject(2) will finish before runReject(4) and it will reject all other not finished