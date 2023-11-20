// what is the output? and explain why?

// 1
// Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
  // My first guess is 1, 2. Because there is no reject happens.

// // 2
// Promise.reject(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .catch(err => {
//     console.log(err);
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
  // First guess: 1, 3
  // Because return result will be treated as a resolve.

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
  //First guess: resolve(1)-1000, reject(Error: 4)-4000, resolve(3)-1000, resolve(Error:2)-2000,
  // So the result should be 1, 3, Error:2, Error:4

  //The answer is onle Error:2, why?

  //According to official docs, Promise.all will return all fulfilled states only if all promises are
  // fulfilled, otherwise return the first rejected state. As 2000 ms is shorter than 4000, Error:2 will 
  // be thrown first.
  
