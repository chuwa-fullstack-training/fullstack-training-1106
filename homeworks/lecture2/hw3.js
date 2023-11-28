// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// Javascript use binary floating point

console.log(0.1 + 0.2 == 0.3);
// false
// Javascript use binary floating point

console.log(1 +  "2" + "2");
// 122
// because 1 is treated as a string

console.log(1 +  +"2" + "2");
// 32
// because +"2" is treated as a number

console.log(1 +  -"1" + "2");
// 02
// because -"1" is treated as a number

console.log(+"1" +  "1" + "2");
// 112
// because +"1" is treated as a number

console.log( "A" - "B" + "2");
// NaN2
// because "A" - "B" is NaN

console.log( "A" - "B" + 2);
// NaN
// because "A" - "B" is NaN and NaN + 2 is NaN

console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// because true or false is true (1)

console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// because true or true is true (1)

console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
//because false and true is false (0)

console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// because && returns the last value as long as the chain is "truthy"

console.log(false == '0')
// true
// because false is 0 and '0' is 0

console.log(false === '0')
// false
// because it is a strict equality
