// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// This will print 0.30000000000000004 is the console due to the floating number issue

console.log(0.1 + 0.2 == 0.3);
// Since the operation 0.1 + 0.2 will not get exactly 0.3 but 0.30000000000000004, the operation  
// 0.1 + 0.2 == 0.3 will not be true. Therefore, the console will return false

console.log(1 +  "2" + "2");
// When perform 1 + "2" in JS will be "12" and then + "2" will ended up in result "122"

console.log(1 +  +"2" + "2");
// The + operator before "2" will convert "2" to number 2， then 1 + 2 equals to 3, and then 
// perform 3 + "2" will ended up with a result equals to "32"

console.log(1 +  -"1" + "2");
// The - operator before "1" will convert the string "1" to number -1, then 1 + -1 equals to 0, 
// and then 0 + "2" will ended up with a result equals to "02"

console.log(+"1" +  "1" + "2");
// The + operator before the first "1" will convert it to number 1, then 1 + "1" equals to "11",
// and then "11" + "2" will ended up with a result equals to "112"

console.log( "A" - "B" + "2");
// Since there is no - operation between two strings, "A" - "B" will return a string "NaN",
// and then "NaN" + "2" will ended up with a result equals to "NaN2"

console.log( "A" - "B" + 2);
// Since there is no - operation between two strings, "A" - "B" will return a string "NaN",
// and then "NaN" + 2 will try to convert the string "NaN" to a number, but there is no arithmetic
// conversion of "NaN" so the result will be NaN but not in string type but a number

console.log("0 || 1 = "+(0 || 1));
// The || operator will check if the first condition is true, if it is, the first condition will be
// returned otherwise do the same for the second
// In this code the result will be "0 || 1 = 1" 

console.log("1 || 2 = "+(1 || 2));
// The || operator will check if the first condition is true, if it is, the first condition will be
// returned otherwise do the same for the second
// In this code the result will be "1 || 2 = 1" 

console.log("0 && 1 = "+(0 && 1));
// The && operator will check if the first condition is false, if it is, return the first condition,
// if not, do the same to check the rest condition, if all condition are true, return the last condition
// In this code the result will be "0 && 1 = 0"

console.log("1 && 2 = "+(1 && 2));
// The && operator will check if the first condition is false, if it is, return the first condition,
// if not, do the same to check the rest condition, if all condition are true, return the last condition
// In this code the result will be "1 && 2 = 2"

console.log(false == '0')
// The == operator checks if two variables are equal
// In this code the string '0' will be convert to number 0 which represent false
// Therefore in this code the result is True 

console.log(false === '0')
// The === operator checks if two variables are strictly equal, which means no conversion
// Therefore in this code the result is False