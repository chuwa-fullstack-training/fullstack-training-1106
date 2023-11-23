// what is the output? and explain why?

// 1
Promise.resolve(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
// The output:
// 1
// 2
// Explaination: Initially, the promised resolved with 1, so in the first "then" of the promise chain, the res will be 1, and 1 will be logged. Once this "then" completed, 2 will be returned to next then, and 2 will be logged.

// // 2
Promise.reject(1)
  .then((res) => {
    console.log(res);
    return 2;
  })
  .catch((err) => {
    console.log(err);
    return 3;
  })
  .then((res) => {
    console.log(res);
  });
// The output:
// 1
// 3
// Explaination: Firstly, the promise rejected with value 1, so the catch function will be executed and log 1. The next then will have the returned value 3 from "catch", so it will console log 3.

//3
function runAsync(x) {
  const p = new Promise((resolve) => setTimeout(() => resolve(x), 1000));
  return p;
}

function runReject(x) {
  const p = new Promise((resolve, reject) =>
    setTimeout(() => reject(`Error: ${x}`), 1000 * x)
  );
  return p;
}

Promise.all([runAsync(1), runReject(4), runAsync(3), runReject(2)])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// The output :
// Error: 2
// Explaination: the promise.all() rejects when any of the input promise reject, and with the first reject value. RunReject(2) will be the first reject promise because the delay is 2s. So, the catch handler will log Error: 2 in the console.
