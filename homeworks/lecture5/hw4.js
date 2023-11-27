// what is the output? and explain why?

// 1: 1 2
/* First .then() handler receives '1' and prints '1', and the return value '2' is wrapped into a new resolved Promise for the next handler in the chain.
  There is no errors, so .catch() is skipped.
  Second .then() handler receives '2' and prints '2'.
*/
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

// // 2: 1 3
/* Since the Promise is immediately rejected with the value 1, the first .then() handler is skipped. 
  The .catch() handler receives '1' and prints '1', and the return value '3' is wrapped into a new resolved Promise for the next handler in the chain.
  Second .then() handler receives '3' and prints '3'.
*/
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

//3: Error: 2
/* if any promise rejects, Promise.all will reject with the reason of the first promise that rejects.
  Due to 2<4, runReject(2) rejects earlier. About 2 second later, "Error: 2" will be printed.
*/
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
