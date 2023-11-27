// 1. why there would be error in the following code? and how to fix it?
/* Because the function's implementation does not return a type that fully matches the extended User type T. 
    The implementation only returns an object with id and type properties, 
    potentially omitting other properties that might be part of T.*/
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  // return {
  //   id: u.id,
  //   type: "customer",
  // };
  return {
    ...u,
    type: "customer",
  } as T;
}
let test1 = makeCustomer({ id: 1, type: "a", name: "name" });
console.log(test1);

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  else {
    throw new Error("Only accept either two strings or two numbers at the same time");
  }
}

console.log(f("a", "b"));
console.log(f(1, 2));
console.log(f('a', 2));