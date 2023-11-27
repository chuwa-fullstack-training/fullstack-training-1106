// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    type: "customer",
  };
}
/* Reason: 
  return {
   id: u.id,
   type: "customer",
  };
  We can not make sure the type of this object is T, if we return object like above.
  The structure of above object is same to User, however, the type of the return value of this funtion shoule be T,
  and T extends from User. If T has more properties, it will return error.
  
  Solution:
  The parameter 'u' belongs to type T. we can deconstruct u in our return object, so the return object absolutely
  includes all property of T. Then we can overwrite id and type as we want. 
*/

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } 
  else if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  else if (typeof a === "string" && typeof b === "number"){
    throw new Error("Wrong Input Type!");
  }
  else if (typeof a === "number" && typeof b === "string"){
    throw new Error("Wrong Input Type!");
  }
  else{
    // for more operations
  }
}

console.log(f("1","1"));
console.log(f(1,1));
console.log(f("1",1));