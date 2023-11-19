// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// The floating number in JS is stored as binary fractions. The fraction results may lead some small errors.

console.log(0.1 + 0.2 == 0.3);
// false
// As the result of the addition has small error, the result is 0.30000000000000004 which is not equal to 0.3.

console.log(1 +  "2" + "2");
// 122
// The first step is adding a number to a string. JS will implicitly convert both sides to string. 
// Hence, the whole pprocess will be "1" + "2" + "2" = "122"

console.log(1 +  +"2" + "2");
// 32
// In JS, the addtional operator + will convert a string to a number (if possible). Then, 1 + (+"2") becomes 1 + 2 = 3.
// The next step is 3 + "2" which is adding a number to a string. JS will convert both side to string and the result is 32.

console.log(1 +  -"1" + "2");
// 02
// The addtional operator - will convert -"1" to -1 in number. Then, 1 + (-1) becomes 0. The next step is 0 + "2" which is adding 
// a number to a string. JS will convert both side to string and the result is 02.

console.log(+"1" +  "1" + "2");
// 112
// In JS, the addtional operator + will convert +"1" to 1. Then, +"1" +  "1" becomes 1 + "1" which is adding a number to string.
// Then, the process is similar to 1 + "2" + "2" and the result of 1 + "1" + "2" is "112".

console.log( "A" - "B" + "2");
// NaN2
// The subtraction of two strings is not a number and the result is NaN in number. Then the process will become NaN + "2" which will
// convert NaN to "NaN" in string, and the result will be "NaN2".

console.log( "A" - "B" + 2);
// NaN
// The subtraction of two strings is not a number and the result is NaN in number. Then the process will become NaN + 2. However, the 
// addtion of number and NaN is still NaN. Hence, the result is NaN.

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// The boolean operation will treat 0 as false, and (false || var) will always return the second variable which is 1. 
// Hence the result is "0 || 1 = " + 1 = "0 || 1 = 1".

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// The boolean operation will treat 1 as true, and (true || var) will always return the first variable which is 1. 
// Hence the result is "1 || 2 = " + 1 = "1 || 2 = 1".

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// The boolean operation will treat 0 as false, and (false && var) will always return the first variable which is 0. 
// Hence the result is "0 && 1 = " + 0 = "0 && 1 = 0".

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// The boolean operation will treat 1 as true, and (true && var) will always return the second variable which is 2. 
// Hence the result is "1 && 2 = " + 2 = "1 && 2 = 2".

console.log(false == '0')
// true
// The boolean operation will treat '0' as false. As the values for the both sides of the boolean comparsion are the same,
// the result will be true.

console.log(false === '0')
// false
// === will check if the data type of both sides are same. As boolean and string are not belong to same data type,
// the result is false
