// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
//0.30000000000000004: because 0.1 and 0.2 are float-point number in javascript. The float-point numbers have small accuracy errors.

console.log(0.1 + 0.2 == 0.3);
//false: the reason is shown above. 0.1 + 0.2 is not precisely equal to 0.3.

console.log(1 +  "2" + "2");
//"122": when you add a number and a string in javascript, it will convert the number to string first and concat alL stirngs as a new string.

console.log(1 +  +"2" + "2");
//"32": +"2" will convert to number 2, and then it will do 1+2 operation which result is 3. The last step is same as the question above, which converts number 3 to string "3" and concat "3" and "2".

console.log(1 +  -"1" + "2");
//"02": The reason is same as the quesion above. -"1" will convert to number -1.

console.log(+"1" +  "1" + "2");
//"112": +"1" will convert to number 1 and then convert to string because it will be added to string "1" and "2", so the result is string "112"

console.log( "A" - "B" + "2");
//"NaN2": string "A" - string "B" can not be converted to two vaild number by subtraction, so the result is NaN (Not a Number).
// When NaN is added to a string "2", it will be converted to string "NaN" and concat with "2".

console.log( "A" - "B" + 2);
//"NaN": string "A" - string "B" can not be converted to two vaild number by subtraction, so the result is NaN (Not a Number).
// When Not a Number add a number 2, the result will also be Not a Number.

console.log("0 || 1 = "+(0 || 1));
// 0 is equal to false and number > 0 is equal to true in logic operation.
//"0 || 1 = 1": (0 || 1) is equal to numebr 1, and then number 1 will be converted to string "1" and concat with "0 || 1 = ".

console.log("1 || 2 = "+(1 || 2));
//"1 || 2 = 1": The result of (1 || 2) is number 1, and then number 1 will be converted to string "1" and concat with "1 || 2 = 1".

console.log("0 && 1 = "+(0 && 1));
//"0 && 1 = 0": The result of (0 && 1) is number 0, and then number 0 will be converted to string "0" and concat with "0 && 1 = ".

console.log("1 && 2 = "+(1 && 2));
//"1 && 2 = 2": (1 && 2) will result in 2, because both of 1 and 2 is truthy value and the AND operation will return the last truthy value if there is no false.

console.log(false == '0')
//true: when doing == operation, javascript will do type coercion such as string to number, boolean to number etc. '0' will be converted to number 0 and false will be converted to number 0,
// so the result is true.

console.log(false === '0')
//false: === operation will compare the type of two operand and then compare the values. false belongs to Boolean and '0 belongs to String, so the result is false.
