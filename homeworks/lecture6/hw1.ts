// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};
// The reason should be ts doesn't know if u.id is number type.
function makeCustomer<T extends User>(u: T): T {
  
  return {
    id: u.id,
    type: "customer",
  } as T
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else if(typeof b === "number") {
    return a + b;
  }
}
