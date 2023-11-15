Explain following code: [JS]

let o1 = {id: 1};
let o2 = {id: 2};
let obj = {};
obj.o1 = 'o1';
obj[o2] = 'o2';
console.log(obj); // what is this output?



let o3 = {id: 3};
obj[o3] = 'o3';
console.log(obj); // what is this output?




Answer:




{
  o1: "o1",
  [object Object]: "o2"
}


{
  o1: "o1",
  [object Object]: "o3"
}