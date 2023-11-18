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
 * Output:
 * 1
 * 2
 * 
 * Reason:
 * The promise is first resolved with
 * value 1. The then afterward is executed,
 * ouputing '1'. Then, a promise resolved with
 * 2 is return. No error is thorwed. The then
 * after the catch is executed receiving 2 as input
 * and printing out '2'.
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
/**
 * Output:
 * 1
 * 3
 *
 * Reason:
 * The promise is rejected with value 1 first.
 * We then go directly to catch function after
 * the first then. Within the catch function,
 * the input 1 is received and printed '1' out to
 * the console. Then it returns a promise that
 * resolved with 3. Afterward, we enter the then
 * function comes after the catch. The function
 * receives a value 3 as input and prints '3' out
 * to console.
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
 * Output:
 * Error: 2
 * 
 * Promise.all will wait for all promises fulfilled then go to execute 
 * the function in "then()". But in this case, since both "runReject(4)"
 * and "runRejec(2)" will not return promises that will be fulfilled.
 * We will enter the function within "catch()". But "runReject(2)"
 * will reject first due to shorter duration of timeout execution.
 * So, the function in catch will receive the value "Error: 2"
 * first then print it out to the console finishing the execution.
 * Regardless of runReject(4), the function chains of Promise.all
 * finish its execution after catching the first error.
 * 
 */
