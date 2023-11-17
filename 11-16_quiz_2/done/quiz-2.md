2. What is the currying function?


follow up: how to get the result of a + b + c by executing the following function?
const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
















curryUnaryFunction = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    }
  } 
}


Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. 
Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function. 

const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6

