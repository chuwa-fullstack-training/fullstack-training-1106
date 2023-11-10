// What would be the output of following code?
// Explain your answer.

// 0.30000000000000004, 0.1 and 0.2 can not be shown precisely in the binary presentation
// so the number is little larger than 0.3
console.log(0.1 + 0.2);

// false, because the result is a little larger than 0.3
console.log(0.1 + 0.2 == 0.3);

// string 122, javascript will coerced number into string when `+` is applied to a number and a string
console.log(1 +  "2" + "2");

// string 32, `+"2"` will convert string 2 into number 2 and add into 3, and then concatenate with string 2 and get string 32
console.log(1 +  +"2" + "2");

// string 02, `-"1"` will convert string -1 into number -1, get number 0, and then concatenate with 2 will get string 02
console.log(1 +  -"1" + "2");

// string 112, `+"1"` will convert string 1 into number 1, but then concatenate with another string 1 and string 2, get final string 112
console.log(+"1" + "1" + "2");

// NaN2, `-` operator will convert string into number, but "A" and "B" is not a number, so it will get a NaN result, and then concatenate into NaN2
console.log( "A" - "B" + "2");

// NaN, first execution is going to have a NaN result, and NaN added with 2 will give a NaN result
console.log( "A" - "B" + 2);

// string 0 || 1 = 1, the || operator will return the first one if it is truthy, if it is false, it will return the second one,
// 0 is falsy so the second one is returned and concatenate with the first part of string and get the result.
console.log("0 || 1 = "+(0 || 1));

// string 1 || 2 = 1, the  || operator will get the first operand as 1 since it is truthy, and then concatenate with the first part of string and get the result.
console.log("1 || 2 = "+(1 || 2));

// string  0 && 1 = 0, && will return the first falsy value, if none are falsy, it will return the second operand, the first is falsy, so the first is return 
console.log("0 && 1 = "+(0 && 1));

// string 1 && 2 = 2, two are true, so the second one is returned.
console.log("1 && 2 = "+(1 && 2));

// true, == will perform coercion when two operands are not the same, the string 0 will coercioned into false, so it will return true
console.log(false == '0')

// false, === do not perform type coercion, since two are not the same type, it will return false
console.log(false === '0')
