// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  };
}
// The reason that the return has an error is that the type T is a generic type which 
// should include any type of the parameter, but in the code, it only have id and type, which is 
// the type user's keys, but if the parameter has other keys like name or age, this function 
// will not have access to it, so to fix this we need to first copy all the keys in parameter
// and the we can modify the value of those keys
//
// Revised version
function makeCustomer_revise<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer"
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
// Revised version
function f_revise(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number"){
    return a + b;
  } else{
    throw new Error('The two parameters are in different type');
  }
}