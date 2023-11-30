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
// Output: 1, 2
// Reason: the 1st then will be called, so it will print 1 first, 
//         cuz there is no error, so it will go through the 2nd then, 
//         so it will print 2

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
// Output: 1, 3
// Reason: the 1st then will not be called, cuz it s reject, it pass the 1 to the catch
//         during the catch, it will print 1, then it will go through the 2nd then(pass 3 to the 3rd then),
//         so it will print 3


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
// Output: Error: 2
// Reason: runAsync(1) can be executed 
//         and macrotask queue will push wait for 1 second
//         runReject(4) will be rejected after 4 seconds
//         and macrotask queue will push wait for 4 seconds
//         runAsync(3) can be executed
//         and macrotask queue will push wait for 3 second
//         same to runAsync(3), runReject(2) will push to macrotask queue wait for 2 seconds
//         then the queue will work for setTimeOut
//         RunAsync(1) resolve, so it pass 1 to the then
//         RunReject(2) reject, so it pass "Error: 2" to the catch
//         the catch will print "Error: 2"

// _______________________________
  // 1
  // 1
  // 2
  // 3
  // Error: 2