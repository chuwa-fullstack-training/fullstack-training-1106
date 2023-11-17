5. Explain following code:

var promise1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "one");
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then(function (value) {
  console.log(value); 
});









  <!-- setTimeout(() => { 
      resolve("two") 
    } , 100); -->
    
// "two" // Both promises will resolve, but promise2 is faster

Promise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first