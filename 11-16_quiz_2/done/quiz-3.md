3. What is a promise? Why do you need a promise?


















myPromise
  .then(() => {
    ...//
  })
  .then
  .catch(() => console.log(1))














A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending.

The syntax of Promise creation looks like below,

const promise = new Promise(function (resolve, reject) {
  // promise description
});
The usage of a promise would be as below,

const promise = new Promise(
  (resolve) => {
    setTimeout(() => {
      resolve("I'm a Promise!");
    }, 5000);
  },
  (reject) => {}
);

promise.then((value) => console.log(value));

why need: Promises are used to handle asynchronous operations. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.