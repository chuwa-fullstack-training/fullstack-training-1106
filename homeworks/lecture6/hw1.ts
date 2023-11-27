// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    type: "customer",
  } as T;
}

/**
 * Solution: added a 'as T' after return in function makeCustomer
 * Because return type of this function is 'T', which extends'User', 
 * but it didn't explicitly provide the return type, and Typescript infered the return type as 
 * { id: number; type: string; }. But this type may not always same as generic type 'T'.
 * and type 'T' might have any other entries.
 */



// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error('Parameter should either two strings or two numbers at the same time')
  }
}



console.log(f('2','3')) // output: "2 : 3" 
console.log(f(2,3)) // output: 5
console.log(f(2,'3')) // output: [ERR]: Parameter should either two strings or two numbers at the same time 