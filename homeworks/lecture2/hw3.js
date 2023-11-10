// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 1.The answer would be 0.30000000000000004. 
// This is because of the way floating-point numbers are represented in JavaScript:
// The fractional number is represented as binary, 
// so that cannot be precisely represented, leading to small rounding errors.

console.log(0.1 + 0.2 == 0.3);
// 2. The answer would be false.
// This is because of the way floating-point numbers are represented in JavaScript:
// As the ouput from last question shows, the answer is not precisely 0.3.

console.log(1 +  "2" + "2");
// 3. The answer would be 122.
// This is because of the way JavaScript handles the + operator:
// If one of the operands is a string, the other one is converted to a string as well.

console.log(1 +  + "2" + "2");
// 4. The answer would be 32.
// Firstly, `+ "2"`: The unary plus operator is used, which converts the string to a number. 
// Thus, `"2"` is converted to the number `2`.
// Then, `1 + 2` results in the number `3`.
// Finally, `3 + "2"`: As one of the operands is a string, JavaScript converts the number 3 to the string "3". 
// So the output is "3" + "2" = "32".

console.log(1 +  -"1" + "2");
// 5. The answer would be 02.
// 1 +  -"1" + "2" = 1 - 1 + "2" = 0 + "2" = "02"

console.log(+"1" +  "1" + "2");
// 6. The answer would be 112.
// +"1" +  "1" + "2" = 1 + "1" + "2" = "1" + "1" + "2" = "112"

console.log( "A" - "B" + "2");
// 7. The answer would be NaN2.
// "A" - "B" + "2" = NaN + "2" = "NaN2"

console.log( "A" - "B" + 2);
// 8. The answer would be NaN.
// "A" - "B" + 2 = NaN + 2 = NaN

console.log("0 || 1 = "+(0 || 1));
// 9. The answer would be 0 || 1 = 1.
// The logical OR (||) operator returns the value of which one of the operands is true(if both false then false).
// so the (0 || 1) would return 1, and the output would be 0 || 1 = 1.

console.log("1 || 2 = "+(1 || 2));
// 10. The answer would be 1 || 2 = 1.
// "1 || 2 = "+(1 || 2) = "1 || 2 = " + 1 = "1 || 2 = " + "1" = "1 || 2 = 1".

console.log("0 && 1 = "+(0 && 1));
// 11. The answer would be 0 && 1 = 0.
// The logical AND (&&) operator returns the value of which one of the operands is false(if both true then true).

console.log("1 && 2 = "+(1 && 2));
// 12. The answer would be 1 && 2 = 2.
// "1 && 2 = "+(1 && 2) = "1 && 2 = " + 2 = "1 && 2 = " + "2" = "1 && 2 = 2".

console.log(false == '0')
// 13. The answer would be true.
// The == operator converts the operands if they are not of the same type, then applies strict comparison.

console.log(false === '0')
// 14. The answer would be false.
// The === operator does not convert the operands, and returns false if any of the operands are not of the same type and value.
