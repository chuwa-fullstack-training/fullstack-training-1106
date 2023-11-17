// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// The result is not exact 0.3 as float number can produce precision problems due to binary representation

console.log(0.1 + 0.2 == 0.3);
// As 0.1 + 0.2 is not equal to 0.3 in binary, so the answer should be false

console.log(1 +  "2" + "2");
//When + operator meets string and other types, it will convert them into one string;

console.log(1 +  +"2" + "2");
//when + meets a string after another arthimetic operator, it will first convert string to a number then 
// implements a plus operation or a concat operation;
console.log(1 +  -"1" + "2");
//when - meets a string after another arthimetic operator, it will first convert string to a number then 
// implements a plus operation or a concat operation;
console.log(+"1" +  "1" + "2");
// first convert "1" to a number 1, then when it meets "1", it will be converted to a string "1",
// next convert all string together

console.log( "A" - "B" + "2");
// when - meets a string, it will convert the string into a number if the content of string is a number,
//or else convert it to a Not An Number, and last concat NaN with the remaining part of string.
console.log( "A" - "B" + 2);
// Compared with the last one, NaN cannot make a addition operation with numbers, so the result is NaN
console.log("0 || 1 = "+(0 || 1));
// First part is a string , second part is a logic arthimetic value, so the value is string concat with a number
console.log("1 || 2 = "+(1 || 2));
// For logic OR, it will return the first value if the first one is true;
console.log("0 && 1 = "+(0 && 1));
// For logic AND, it will return the second value if the first one is true otherwise the first value;

console.log("1 && 2 = "+(1 && 2));
// same logic as the last one
console.log(false == '0')
// Both of them value are 0, so return true
console.log(false === '0')
// the first type is boolean, the second is string, so return false;
