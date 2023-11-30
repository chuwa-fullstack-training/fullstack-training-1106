// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}
// as T
// because the return type of makeCustomer is T, but we are returning an object with type "customer"
// we don't know what type of T is, so we need to cast it to T

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a !== typeof b) {
    throw new Error("Parameters must be both numbers or both strings");
  }
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number"){
    return a + b;
  }
}
