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
 * output:
 * 1
 * 2
 * Because the promise first resolve and the first 'then' print out 2 and return 'res' to 2, 
 * and 'catch' is skipped because there's no rejection. And last then print out 'res' which is 2.
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
 * output:
 * 1
 * 3
 * Because the promise reject with the reason '1', and, the first 'then' was skipped. 'catch' will catch
 * the error, print out the error '1', and return value 3. The last 'then' execute and print out value
 * from previous 'catch' bloack, which is '3'
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


/**
 * output: Error: 2
 * 
 * Inside promise.all, it runs:
 * const p1 = new Promise(resolve =>
    setTimeout(() => resolve(1), 1000)
  );

  const p4 = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: 4`), 1000 * 4)
  );

  const p3 = new Promise(resolve =>
    setTimeout(() => resolve(3), 1000)
  );

  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: 2`), 1000 * 2)
  );
 *
 * The promise.all function rejects when any of the input's promises rejects, 
 * with this first rejection reason.
 * It runs p1 first and then p3, because they both setTimeout 1000 milliseconds.
 * Then it have a reject promise p2 after 2000 milleseconds, so the whole 'promise.all' rejected,
 * and return 'Error: 2'. Then in 'catch' block, it print out the error.
 * 
 */
