// 1. why there would be error in the following code? and how to fix it?
// T is a superset of User
// fix: see line 14
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  // }
  } as T;
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// fix: see line 26 - 29
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    // return a + b;
    if (typeof b === "string") {
      throw new Error("[!] invalid parameters.");
    }
    return a + b;
  }
}

