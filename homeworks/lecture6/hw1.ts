// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    type: "customer",
  };
}
/**
 * Since T extends User, T could be a subtype of User with extra properties adding to it.
 * But simply returns an object with only fields: id and type we could potentially modify
 * the subtype T back to its supertype User which is an unwanted behavior errored by
 * Typescript. Since we want to modify the type field, we can copy all properties of T
 * and overwrite type with "customer". The return of such object will still confine to
 * type T while T extends User as a subtype.
 */

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw Error("Type unmatched!");
  }
}
let a: string | number = "a";
let b: string | number = 5;
a + b;
/**
 * "+" can not apply when one of the operand is of union type within function,
 * where "+" operator can not determine a suitable operation to be performed
 * on its operands during compilation. It can either be concatenation or
 * arithmetic plus.
 */
