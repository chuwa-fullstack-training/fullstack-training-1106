// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//output: 0.30000000000000004
//Because 0.1 and 0.2 are floating-point numbers, they cannot be accurately represented in the binary system, leading to a slight error in calculation.
console.log(0.1 + 0.2 == 0.3);
//output: false
//Due to the inaccuracy of floating-point arithmetic, the sum of 0.1 and 0.2 does not exactly equal 0.3.
console.log(1 +  "2" + "2");
//output:"122"
//In JavaScript, adding a number to a string will convert the number to a string. Thus, 1 + "2" becomes "12". When two strings are concatenated using '+', it results in the string "122"
console.log(1 +  +"2" + "2");
//output:"32"
//The expression '+ "2"' uses the unary plus operator, which tries to convert the operand to a numeric type. Therefore, it becomes the number 2, and 1 + 2 becomes the number 3. Then, 3 + "2" results in the string "32".
console.log(1 +  -"1" + "2");
//output:"02"
//The expression '- "1"' uses the unary minus operator, which tries to convert the operand to a numeric type. Therefore, it becomes the number -1, and 1 + -1 becomes the number 0. Then, 0 + "2" results in the string "02".
console.log(+"1" +  "1" + "2");
//output:"112"
//The expression '+"1"' uses the unary plus operator, which tries to convert the operand to a numeric type. Therefore, it becomes the number 1, and 1 + "1" becomes the string "11". Then, "11" + "2" results in the string "112".
console.log( "A" - "B" + "2");
//outpunt: NaN2
//In JavaScript, when you attempt to use the subtraction operator (-) on two strings, JavaScript tries to convert these strings into numbers. If the strings cannot be converted into valid numbers, the result will be NaN, which stands for "Not-a-Number".
//"A" - "B" results in NaN
//NaN + "2" will convert NaN into its string representation "NaN" and then result as "NaN2"
console.log( "A" - "B" + 2);
//output: NaN
//NaN is a special value in JavaScript that propagates through arithmetic operations. Essentially, any mathematical operation involving NaN results in NaN.
console.log("0 || 1 = "+(0 || 1));
//output:"0 || 1 = 1"
//The || operator returns the first operand if it is truthy, and otherwise returns the second operand. 0 is a falsy value, so it returns 1
//string + number will conver number into string and results in string 
console.log("1 || 2 = "+(1 || 2));
//output:"1 || 2 = 1"
//1 represent truthy value and 1 || 2 return 1
//string + 1 convert 1 into string "1" results in "1 || 2 = 1"
console.log("0 && 1 = "+(0 && 1));
//output:"0 && 1 = 0"
//This && operator returns the first operand if it is falsy, and otherwise returns the second operand.
//So it returns 0 
console.log("1 && 2 = "+(1 && 2));
//output: "1 && 2 = 2"
//because 1 represent truthy value, so it returns the second operand.
console.log(false == '0')
//output: true
//when using the double equals operator == (also known as the loose equality operator), JavaScript performs type coercion to compare the values.
//Both side are converted to number 0, then compare
//so output true
console.log(false === '0')
//output: false
//This is because the triple equals operator === (known as the strict equality operator) checks for both value and type equality.
//false is a boolean value.
//'0' is a string value.
//Since their types are different， the strict equality comparison returns false.