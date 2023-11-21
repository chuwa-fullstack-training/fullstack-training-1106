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

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if(typeof a !== typeof b) {
    throw new Error("a and b are not same type");
  }
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return (a as number) + (b as number);
  }
}
