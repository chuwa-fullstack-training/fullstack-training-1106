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
  //Promise first resolve and the first 'then' print 2 and return 'res' as 2, since no rejection, catch skipped. And last then print out 'res' is 2.

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
//1 3
//The promise was rejected with '1', and, the first 'then' was skipped. 'catch' will catch the error, print the error '1', and return value 3. The last 'then' executes and print 3 from 'catch' block。

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

  // Error:2
  //