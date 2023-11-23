function x(){
     for (let i = 1; i <= 10; i++){ // using var here 
        setTimeout(function (){ console.log(i); }, 1000); } 
        console.log("Learn"); 
    } 
// x();

// for(let i=0;i<100000;i++){
//     setTimeout(() => { console.log(1); }, 0);
// }


// Promise.resolve().then(() => console.log(2)); // what if promise a setTimeout and another request in setTimeout, will there be a deadlock?

// for(let i = 0;i<1000;i++){
//     setTimeout(() => {
//         console.log(200);
//     },1000);
// }
// for(let i = 0;i<1000;i++){
//     console.log(100);
// }
const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      return "success";
      console.log("timerEnd");
    }, 0);
    console.log(2);
    // resolve("success");
  });
  
  promise.then((res) => {
    console.log(45);
    console.log(res);
  });
  
  console.log(4);
// const myPromise = Promise.resolve();

// myPromise
//   .then(res => {
//     console.log(`frist resolver ${res}`); 
//     return Promise.resolve("2");
//   })
//   .then(res => {
//     console.log(`second resolver ${res}`);
//     return 3;
//   })
//   .then(res => {
//     console.log(`third resolver ${res}`);
//     return Promise.reject("error-3");
//   })
//   .then(res => {
//     console.log(`fourth resolver ${res}`);
//     return Promise.resolve(4);
//   })
//   .catch(err => {
//     console.log(`error catched: ${err}`);
//   })
//   .then(res => console.log(res));