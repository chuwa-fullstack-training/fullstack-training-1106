15. Explain following code:

const myPromise = Promise.resolve();

return myPromise
  .then(res => {
    console.log(`frist resolver ${res}`); 
    return Promise.resolve("2");
  })
  .then(res => {
    console.log(`second resolver ${res}`);
    return 3;
  })
  .then(res => {
    console.log(`third resolver ${res}`);
    return Promise.reject("error-3");
  })
  .then(res => {
    console.log(`fourth resolver ${res}`);
    return Promise.resolve(4);
  })
  .catch(err => {
    console.log(`error catched: ${err}`);
  })
  .then(res => console.log(res));

// first resolver undefined
// second resolver 2
// third resolver 3
// error catched error-3












//
frist resolver undefined
second resolver 2
third resolver 3
error catched: error-3