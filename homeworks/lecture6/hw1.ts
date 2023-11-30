// 1. why there would be error in the following code? and how to fix it?
// makeCustomer expect to return an object of generic type T but return a new object with type: customer:
/**
 * fix:
 * change id: u.id to ...u
 * this overrides type property
 */
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
// fix:
function makeCustomerFix<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// problem: TS not able to inder a and b's type
function f(a: string | number, b: string | number) {
  if (typeof a === "string") {
    return `${a} : ${b}`;
  } else {
    return a + b;
  }
}

// fix
function f_fix(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Invalid argument types");
  }
}
