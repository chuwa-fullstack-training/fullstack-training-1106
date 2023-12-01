// 1. why there would be error in the following code? and how to fix it?
type User = {
  id: number;
  type: string;
};

type Customer = User & {
  type: "customer";
};

function makeCustomer<T extends User>(u: T):Customer{
  return {
    id: u.id,
    type: "customer",
  };
}
// The error is due to a mismatch in the return type of the function. The function is declared to return type "T", but is attempting to return 
// an object with a fixed type property of "customer". The solution is to change the return type of the function to "Customer" that 
// explicitly specifies the type property as "customer".


// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number){
  if (typeof a === "string" && typeof b === "string") {
    return `${a} : ${b}`;
  } else  if (typeof a === "number" && typeof b === "number"){
    return a + b;
   } else{
      throw new Error("a and b should be same type");
    }
  }

  //console.log(f(1, "2"));
 
