// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000000004, because of floating precision issue.

console.log(0.1 + 0.2 == 0.3); // false, same as above

console.log(1 +  "2" + "2"); // 122, when one of operands is string, js will concat it.

console.log(1 +  +"2" + "2"); // 32, +"2" will convert to 2, and js will concat then.

console.log(1 +  -"1" + "2"); // 02, -"1" will convert to -1.

console.log(+"1" +  "1" + "2"); // 112, +"1" will convert to 1, and js will concat them.

console.log( "A" - "B" + "2"); // "A" - "B" is not a number, so subtraction will result in NaN, and then concat.

console.log( "A" - "B" + 2); // "A" - "B" is NaN, and any arithmetic operation with NaN will be NaN.

console.log("0 || 1 = "+(0 || 1)); // 0 || 1 = 1, || will return the first truthy value it encounters.

console.log("1 || 2 = "+(1 || 2)); // 1 || 2 = 1, because 1 is truthy.

console.log("0 && 1 = "+(0 && 1)); // 0 && 1 = 0, && returns the first falsy value, so 0.

console.log("1 && 2 = "+(1 && 2)); // 1 && 2 = 2, for &&, if the first value is truthy, it will return the second.

console.log(false == '0') // true, because == will perform coercion, and false is equivalent to 0, so true.

console.log(false === '0') // false, === checks for strict equality without type coercion.
