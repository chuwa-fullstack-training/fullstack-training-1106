// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/*
will output float around 0.3
n JavaScript, floating-point arithmetic can lead to precision issues because 
numbers are stored in a binary format that can't exactly represent 0.1 or 0.2
*/

console.log(0.1 + 0.2 == 0.3);
/*
false
The sum 0.1 + 0.2 doesn't exactly equal 0.3 in JavaScript's binary floating-point arithmetic.
*/
console.log(1 +  "2" + "2");
/*
"122"
The number 1 is first concatenated with the string "2" to form "12"
*/
console.log(1 +  +"2" + "2");
/*
"32"
+ operator converts "2" into a number, so it becomes 1 + 2
*/
console.log(1 +  -"1" + "2");
/*
"02"
- operator converts "1" into a number, so it becomes 1 - 1
*/
console.log(+"1" +  "1" + "2");
/*
"112"
The unary + operator converts the first "1" into a number,
so it becomes 1, and then this number is concatenated with the following strings "1" and "2".
*/
console.log( "A" - "B" + "2");
/*
"NaN2"
"A" - "B" cannot be converted to numbers, so we get NaN and then NaN is concatenated with "2"
*/
console.log( "A" - "B" + 2);
/*
NaN
"A" - "B" results in NaN, and NaN + 2 is still NaN
*/
console.log("0 || 1 = "+(0 || 1));
/*
"0 || 1 = 1"
(0 || 1) returns 1
*/
console.log("1 || 2 = "+(1 || 2));
/*
"1 || 2 = 1"
(1 || 2) returns 1
*/
console.log("0 && 1 = "+(0 && 1));
/*
"0 && 1 = 0"
(0 && 1) returns 0
*/
console.log("1 && 2 = "+(1 && 2));
/*
"1 && 2 = 2"
(1 && 2) returns 2. In a logical AND operation, if the first operand is truthy, the second operand is returned.
*/
console.log(false == '0')
/*
true
When using the double equals ==, JavaScript performs type coercion and false is considered equivalent to '0'
*/
console.log(false === '0')
/*
false
The triple equals === checks for both value and type, so a boolean false is not strictly equal to the string '0'
*/

