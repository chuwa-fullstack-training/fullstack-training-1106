// what is the output? and explain why?

// 1
// Output: 1 2
// `resolve(1)` triggered the first `.then` with res = 1 so `1` is outputted then 2 is returned. then the second `.then` is triggered with res = 2.
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

// // 2
// Output: 1 3
// the first `.catch` and the second `.then` are triggered.
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

//3
// Output: Error: 2
// if one promise rejects, `Promise.all` immediately rejects, the other results are ignored.
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
