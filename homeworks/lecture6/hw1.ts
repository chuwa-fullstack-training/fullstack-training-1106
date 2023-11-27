// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

type Customer = {
  id: number;
  type: "customer"; // Specific type for customers
};

function makeCustomer<T extends User>(u: T): Customer {
  return {
    id: u.id,
    type: "customer",
  };
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Parameters must be either two strings or two numbers.");
  }
}
