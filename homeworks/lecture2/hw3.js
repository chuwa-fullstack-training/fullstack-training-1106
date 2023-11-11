// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004 because the way decimal is stored in system can lead to loss of precision

console.log(0.1 + 0.2 == 0.3);
// false because of the loss precision, 0.1 + 0.2 is not exactly 0.3

console.log(1 +  "2" + "2");
// 122 because 1 is converted to string before addition

console.log(1 +  +"2" + "2");
// 32 because +"2" will convert "2" to decimal 2 first and it is added to 1 before being converted to string

console.log(1 +  -"1" + "2");
// 02 because -"1" is first converted to decimal -1 and add it to 1 is equal to 0. Then 0 is converted to string before addition to "2"

console.log(+"1" +  "1" + "2");
// 112 because +"1" will first convert to decimal 1 but then converted back to "1" since it is added to a string

console.log( "A" - "B" + "2");
// NaN2 because neither "A" nor "B" can be converted to decimals so the deduction result is NaN then it is converted to string before add "2"

console.log( "A" - "B" + 2);
// NaN because "A" - "B" is equal to NaN and NaN add a decimal is still NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1 because 0 is falsy so the second operand is returned which is 1

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1 because 1 is truthy so the first operand is returned which is 1

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0 because 0 is falsy so the first operand is returned which is 0

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2 because 1 is truthy so the second operand is returned which is 2

console.log(false == '0')
// true == will use type coersion on both operands and both false and '0' will be converted to decimal 0

console.log(false === '0')
// false === will not use typr coersion and they have different types so the result is false
