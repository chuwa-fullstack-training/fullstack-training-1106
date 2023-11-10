// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// ≈0.3 but with more float numbers, because floating-point numbers are not calculated specifically in computer.

console.log(0.1 + 0.2 == 0.3);
//false，the reason is the same as q1-the result of 0.1 + 0.2 is not exactly 0.3.

console.log(1 + "2" + "2");
//"122", when the '+' used with a mix of numbers and strings, it will convert the number to strings first and concatenates them.

console.log(1 + +"2" + "2");
//"32"，+"2" will convert the string "2" to a number 2 first，1+2=3，but 3+"2" as explained in last question will result in "32".


console.log(1 + -"1" + "2");
//"02"，-"1" will convert the string "1" to a number -1, 1+(-1)=0, but 0+"2" as explained before will result in "02".


console.log(+"1" + "1" + "2");
//"112"，+"1" will convert the string "1" to a number 1, but 1+"1"+"2" as explained before will result in"112"


console.log("A" - "B" + "2");
//NaN2, the strings "A" and "B" can not be converted to valied numbers, so "A" - "B" results in NaN，
// and NaN will be converted to a string "NaN" to concatenate with string "2"

console.log("A" - "B" + 2);
//NaN, the strings "A" and "B" can not be converted to valied numbers, computing NaN with any number results in NaN.


console.log("0 || 1 = " + (0 || 1));
//"0 || 1 = 1": The logical OR operator returns first truthy value found，(0 || 1) results 1, the number 1 will be converted to string "1" to concatenate with the former string.


console.log("1 || 2 = " + (1 || 2));
// "1 || 2 = 1"， the same reason as last question.


console.log("0 && 1 = " + (0 && 1));
// "0 && 1 = 0"，The logical AND operator returns first falsy value found, (0 && 1) results in 0, string + number.


console.log("1 && 2 = " + (1 && 2));
// "1 && 2 = 2"，The logical AND operator returns last truthy value if no falsy is value found
//  (1 && 2) results in 2


console.log(false == '0')
// true，when using ==, JS will do type coercion. the string "0" will be converted to a numeric 0, 0 is considered falsy in JS.


console.log(false === '0')
//false，三等号会先比较类型，一个boolean一个string类型不一样直接返回false
//false，=== compares the type of operands first, if the types are the same, then compares the values, otherwise return false directly.
// the type of the right operand is boolean but the left is string, they are different.