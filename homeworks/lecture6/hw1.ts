// 1. why there would be error in the following code? and how to fix it?
{
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
}
/**
 * the error happens because it is attempting to return an object that is not guaranteed to have all the properties defined in the generic type T;
 * the correct way is shown as below
 */
{
type User = {
  id: number;
  type: string;
};
interface Customer extends User{
  type: "customer";
}

function makeCustomer<T extends User>(u: T): Customer {
  return {
    id: u.id,
    type: "customer",
  };
}
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
/** this code doesn't promise both a and b are the same type, either string or number the same time;
 * the fixed code is shown as below:
 */
function f_correct(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else if (typeof a === "number" && typeof b === "number"){
    return a + b;
  }
  else{
    throw new Error("a and b are not of the same type");
  }
}
console.log(f_correct("hello",2));
