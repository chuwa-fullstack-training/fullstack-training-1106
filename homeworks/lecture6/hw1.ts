// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    type: "customer",
  };
}
// The error because 

const customer1: User = {
  id: 1,
  type: "customer_1"
}

console.log(makeCustomer(customer1));

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    // make a change here to narrow down the selection of else
    // if either a or b is string, they will return a string value
    // else, if would just be number add
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}
