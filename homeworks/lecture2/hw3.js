// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004
console.log(0.1 + 0.2 == 0.3);
//false
//This result is not exactly 0.3 due to the limitations of floating-point representation.
console.log(1 +  "2" + "2");
// "122"
// When JavaScript encounters the + operator with a string and a number, 
// it converts the number to a string and performs string concatenation.
console.log(1 +  +"2" + "2");
// "32"
// +"2" tries to convert the string "2" to a number, resulting in the numeric value 2.
// The last "+" operation results in the string concatenation, giving the final string "32".
console.log(1 +  -"1" + "2");
// "02"
// -"1" tries to convert the string "1" to a number, resulting in the numeric value -1.
// The last "+" operation results in the string concatenation.

console.log(+"1" +  "1" + "2");
// "112"
// +"1" tries to convert the string "1" to a number, resulting in the numeric value 1.
// The following "+" operations result in the string concatenation.
console.log( "A" - "B" + "2");
// "NaN2"
// strings cannot be converted to numbers, "A"-"B" gets NaN

console.log( "A" - "B" + 2);
// NaN
// "A"-"B" gets NaN. Since one of the operands is NaN, the result is still NaN.
console.log("0 || 1 = "+(0 || 1));
// '0 || 1 = 1'

console.log("1 || 2 = "+(1 || 2));
// '1 || 2 = 1'
// 1 || 2 evaluates to 1

console.log("0 && 1 = "+(0 && 1));
//'0 && 1 = 0'

console.log("1 && 2 = "+(1 && 2));
// '1 && 2 = 2'
// 1 && 2 evaluates to 2 because both 1 and 2 are truthy, 
// and the logical AND operator returns the last truthy operand. 

console.log(false == '0')
// true
// When using loose equality,JavaScript performs type coercion, 
// attempting to convert operands to the same type before making the comparison.

console.log(false === '0')
// false
// The strict equality operator does not perform type coercion,
// meaning it checks both value and type.