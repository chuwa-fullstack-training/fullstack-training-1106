// // What would be the output of following code?
// // Explain your answer.

console.log(0.1 + 0.2);
/**
 * 0.30000000000000004
 * because when using binary to represent float numbers, 
 * there will be  precision limitations and small rounding errors;
 * so the result is not exactly 0.3
 * 
 */

console.log(0.1 + 0.2 == 0.3);
/**
 * false
 * the result of 0.1+0.2 is 0.30000000000000004
 * because when using binary to represent float numbers, 
 * there will be  precision limitations and small rounding errors;
 * so the result is not exactly 0.3
 * 
 */

console.log(1 +  "2" + "2");
/**
 * 122
 * since when two elements on different sides of "+" operator are of different types, the number wll be coerced into a string;
 * both of the number and the string will be treated as strings;
 */
console.log(1 +  +"2" + "2");
/**
 * 32
 * the middle "+" is an unary plus operator (+), which convert "2" from string to an interger;
 * so 1+ +"2" works exactly like 1+2 = 3;
 * the third "+" convert 3 into string, and concat "3" with "2";
 * so the outpt is "32"
 */

console.log(1 +  -"1" + "2");
/**
 * 02
 * the middle "-" is an unary minus operator (-), which convert "1" from string to an interger;
 * so 1+ -"1" works exactly like 1 - 1 = 0;
 * the third "+" convert 0 into string, and concat "0" with "2";
 * so the outpt is "02"
 */

console.log(+"1" +  "1" + "2");
/**
 * 112
 * the first "+" is an unary plus operator (+), which convert "1" from string to an interger;
 * the second convert 1 into string, and concat "1" with "1"; the third "+" concat "11" with "2"
 * so the outpt is "112"
 */

console.log( "A" - "B" + "2");
/**
 * the first "-" is attempting to do subtraction between two non-numetric strings, so the result is NaN,
 *  and the "+" convert NaN into "NaN" and concat "NaN" with string "2", 
 * so the result is "NaN2"
 */

console.log( "A" - "B" + 2);
/**
 * NaN(number)
 * "A" - "B" gives a result NaN;
 * NaN + 2 is still NaN
 */

console.log("0 || 1 = "+(0 || 1));
/**
 * "0 || 1 = 1"(string)
 * (0 || 1) is 1, and the "+" convert 1 to "1", and concat "0 || 1 = " with "1";
 */

console.log("1 || 2 = "+(1 || 2));
/**
 * "1 || 2 = 1"(string)
 * (1 || 2 ) is 1, since "||" operator looks into the left side 1 first, 
 * and since 1 is true, so it returns right away, doesn't go checking the right side 2,
 * and the "+" convert 1 to "1", and concat "1 || 2 = " with "1";
 */


console.log("0 && 1 = "+(0 && 1));
/**
 * "0 && 1 = 0"(string)
 * (0 && 1) is 0, since "&&" operator need both sides to be true to return true , 
 * and since 0 is false, so it returns 0 right away, doesn't go checking the right side 1 ,
 * and the "+" convert 0 to "0", and concat "0 && 1 = " with "0";
 */

console.log("1 && 2 = "+(1 && 2));
/**
 * "1 && 2 = 2"(string)
 * since "&&" operator need both sides to be true to return true , 
 * and since 1 is true, so the right side value is the result, which is 2;
 * and the "+" convert 2 to "2", and concat "1 && 2 =" with "2";
 */

console.log(false == '0')
/**
 * true
 * "==" performs type coercion if the operands are of different types before making comparsion;
 * so it will convert false to string "0" first, then compare "0" to "0", which gives a result true;
 */

console.log(false === '0')
/**
 * false
 * the strict quality comparion "===" doesn't apply type coercion, so the false and '0' are of different types and different values;
 * so the result is false;
 *  */
