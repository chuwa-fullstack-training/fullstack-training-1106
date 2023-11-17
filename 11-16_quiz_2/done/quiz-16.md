16. setTimeout vs Promise, who is faster.


setTimeout(() => {
  console.log(1);
}, 0);

Promise.reslove().then(() => console.log(2));

// what's the print order?