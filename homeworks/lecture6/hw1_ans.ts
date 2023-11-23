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
//The generic type T extends User means that T is a subtype of User, which might have additional properties compared to User.
//When you return { id: u.id, type: "customer" }, you are returning an object of type User, not T.
//If T has more properties than User, those properties are lost in this return, leading to a type mismatch.
//The as T assertion is used to assure TypeScript that the returned object is indeed of type T.

// 2. fix the following code
// requirement: the function should accept either two strings or two numbers at the same time,
// so if parameters are one string and one number, it should throw an error
function f(a: string | number, b: string | number) {
    if (typeof a === "string" && typeof b === "string") {
        return `${a} : ${b}`;
    } else if(typeof a === "number" && typeof b === "number") {
        return a + b;
    }else{
        throw new Error("a and b are not the same type.");
    }
}
