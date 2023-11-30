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
/*
Since T extends User, T could have more properties than just those present in User.
the actual return value is a specific shape { id; type; }, which might not satisfy all possible properties of T. 
*/

// To fix it
function makeCustomer1<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  } as T;
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

// To fix it
function f1(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error('The function should accept either two strings or two numbers at the same time.');
  }
}

// test
console.log(f1('stringA', 'stringB'));      // stringA : stringB
console.log(f1(1, 2));                      // 3
console.log(f1('stringA', 2));              // Error: The function should accept either two strings or two numbers at the same time.