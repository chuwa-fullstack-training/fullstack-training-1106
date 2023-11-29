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
/*
Output: 
1
2

Explanation: 
The promise is resolved, returning 1, => res is 1, console.log(res);
returning 2, => res is 2, console.log(res);
It won't go to 'catch'
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
/*
Output: 
1
3

Explanation: 
The promise is rejected, returning 1, => go to 'catch', err is 1, console.log(res);
returning 3, => res is 3, console.log(res);
It won't go to first 'then'
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
/*
Output: 
Error: 2

Explanation: 
The key behavior of Promise.all is that it rejects as soon as any promise in the array rejects. 
It doesn't wait for the other promises to resolve or reject. 
In this case, runReject(2) will reject first because it has the shortest timeout (2000 milliseconds or 2 seconds).
As soon as runReject(2) rejects, the entire Promise.all call rejects, and the .catch handler is invoked. 
The .then handler is not called because Promise.all didn't resolve successfully.
*/