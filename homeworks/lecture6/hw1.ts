// 1. why there would be error in the following code? and how to fix it?
type User1 = { // rename to User1, cuz the IDE error
  id: number;
  type: string;
};

function makeCustomer<T extends User1>(u: T): T {
  return {
    // id: u.id,
    // ⬇️ fix the error here
    ...u,
    type: "customer",
  };
}

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
// function f(a: string | number, b: string | number) {
//   if (typeof a === "string") {
//     return `${a} : ${b}`;
//   } else {
//     return a + b;
//   }
// }
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("a and b should be the same type");
  }
}
console.log(f("a", "b"));
console.log(f(1, 2));
// console.assert(f("a", 1) === "a : 1");
