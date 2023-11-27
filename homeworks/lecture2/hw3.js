// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/* 
output:0.30000000000000004
Explanation: The output is not exactly 0.3, because both 0.1 and 0.2 are floating number. In computer system, floating number will be transferred to binary which will lose some accuracy. We can use .toFixed(decimal places) to round the result to be specific number of decimal places.
 */

console.log(0.1 + 0.2 == 0.3);
/* 
output:false
Explanation: The sum of 0.1 and 0.2 is not exactly equal to 0.3 because computer system needs to transfer decimal to binary to do arithmetic operation. While transfering floating number to binary, the result would lose accurancy.
 */

console.log(1 +  "2" + "2");
/* 
output:"122"
Explanation: 1 is number, the second element and the thir element are both "2" which are strings. When the "+" operation is used, the implicit type convertion occurs. If one operand is a string , another operand would be changed to string too. 
1 + "2" => "1"+"2"=>"12"
"12"+"2"=>"122" 
*/

console.log(1 +  +"2" + "2");
/* 
output:"32"
Explanation: In "+'2'", the "+" is a unary plus operator which is used to convert the operand to be the number. so the sum of first two elements would be 3, then 3 is added with "2" which is a string, then 3 would be converted to "3" and concate with "2".
1 + +"2" => 1+2 =>3
3+"2"=>"32" 
*/

console.log(1 +  -"1" + "2");
/* 
output:"02"
Explanation: In "-'1'", the "-" is a unary minus operator which is used to convert the operand to be the number. so the difference between first two elements would be 0, then 0 is added with "2" which is a string, then 0 would be converted to "0" and concate with "2".
1 - -"1" => 1-1 =>0
0+"2"=>"0"+"2"=>"02" 
*/

console.log(+"1" +  "1" + "2");
/* 
output:"112"
Explanation: In "+'1'", the "+" is a unary plus operator which is used to convert the operand to be the number, so the first operand would become to number 1, then the addition operation occurs between 1 and "1", so the first operand would be converted to "1", and concate with second operand "1". The sum of first two operands would be "11", then it is added with "2" to get "112".
+"1"+"1" => 1+"1"=>"1"+"1"=>"11"
"11"+"2" => "112"
*/

console.log( "A" - "B" + "2");
/* 
output:"NaN2"
Explanation: The substraction operator is not used for strings in JS, so strings substraction failed, the result would be NaN. Then NaN will be added with "2"(string), so NaN will be converted to string type and concate with "2"
"A"-"B"=>NaN
NaN+"2"=>"NaN"+"2"=>"NaN2"
*/

console.log( "A" - "B" + 2);
/* 
output:NaN
Explanation: The substraction operator is not used for strings in JS, so strings substraction failed, the result would be NaN. When NaN added with a number, the result will still be NaN.
"A"-"B"=>NaN
NaN+2=>NaN
*/

console.log("0 || 1 = "+(0 || 1));
/* 
output:"0||1=1"
Explanation: the "||" means logical OR, it will return the first truty value from left to right. In JavaScript, 0 is not a truty value, so it will return 1. Then since the addition operator is used between string and number, the implicit type convertion occurs, the number 1 would be converted to string "1" and concated with string "0 || 1 =".
"0 || 1 = "+(0 || 1) => "0 || 1 = "+ 1 => "0 || 1 = "+ "1" => "0 || 1 = 1"
*/

console.log("1 || 2 = "+(1 || 2));
/* 
output: "0||1=1"
Explanation: the "||" means logical OR, it will return the first truty value from left to right, so it will return 1. Then since the addition operator is used between string and number, the implicit type convertion occurs, the number 1 would be converted to string "1" and concated with string "0 || 1 =".
"0 || 1 = "+(1 || 2) => " 0|| 1 = "+ 1 => "0 || 1 = "+ "1" => "0 || 1 = 1"
*/

console.log("0 && 1 = "+(0 && 1));
/* 
output: "0 && 1 = 0"
Explanation: the "&&" means logical AND, it will return the first falsy value from left to right, so it will return 0. Then since the addition operator is used between string and number, the implicit type convertion occurs, the number 0 would be converted to string "0" and concated with string "0 && 1 =".
"0 && 1 = "+(0 && 1) => "0 && 1 = "+ 0 => "0 && 1 = "+"0" => "0 && 1 = 0"
*/

console.log("1 && 2 = "+(1 && 2));
/* 
output: "1 && 2 = 2"
Explanation: the "&&" means logical AND, it will return the first falsy value from left to right, if both value are true, it will return the second one, so it will return 2. Then since the addition operator is used between string and number, the implicit type convertion occurs, the number 2 would be converted to string "2" and concated with string "1 && 2 =".
"1 && 2 = "+(1 && 2) => "1 && 2 = "+ 2 => "1 && 2 = "+ "2" => "1 && 2 = 2"
*/

console.log(false == '0')
/* 
output: "true"
Explanation: "==" will compare if the value from both side are equal, when this operator is used, the type coercion occurs. Boolean false will be converted to number 0, and the expression become 0 == '0' which becomes true. 
*/

console.log(false === '0')
/* 
output: "false"
Explanation: "===" will compare if the type and value from both side are equal, the left side is a boolean data type and the right side  is a string, so the expression evaluates to false
*/
