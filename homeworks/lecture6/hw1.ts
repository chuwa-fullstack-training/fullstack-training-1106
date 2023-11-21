// 1. why there would be error in the following code? and how to fix it?
type User1 = {
  id: number;
  type: string;
};

// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }

// The error occurs because the returned object is not conforms to the constraint of type 'T'.
// The object is conforms to the specific constraint 'User'. However, Typescript cannot guarantee that
// the object type is exactly the type 'T'. To fix the error, we can constrain the object to be type 'T'.
function makeCustomer<T extends User1>(u: T): T {
  return ({
    id: u.id,
    type: "customer",
  } as T);
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
    throw new Error("The function only accept either two strings or two numbers at the same time");
  }
}
console.log(f("1", "2"));
console.log(f(1, 2));
console.log(f("1", 2));
