// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004, since floating numbers won't be calculated accurately in computer CPUs.

console.log(0.1 + 0.2 == 0.3);
// false, the result of left side is not exactly 0.3 but 0.30000000000000004

console.log(1 +  "2" + "2");
// "122",  auto string conversion and concatenation

console.log(1 +  +"2" + "2");
// "32", +"2" convert the string "2" to a number +2 to do addtion first, then auto string conversion and concatenation

console.log(1 +  -"1" + "2");
// "02", -"1" convert the string "1" to a number -1 to do substraction first, then auto string conversion and concatenation

console.log(+"1" +  "1" + "2");
// "112", +"1" convert the string "1" to a number 1 first, then auto string conversion and concatenation

console.log( "A" - "B" + "2");
// "NaN2", strings "A" and "B" can not be converted to numbers to do arithmetic operation by - , so "A" - "B" results in NaN, then string conversion and concatenation with "2"

console.log( "A" - "B" + 2);
// NaN, strings "A" and "B" can not be converted to numbers to do arithmetic operation by - , so "A" - "B" results in NaN, then compute NaN with any number results in NaN.

console.log("0 || 1 = "+(0 || 1));
// "0 || 1 = 1", The logical OR operator returns first true value found，(0 || 1) results 1 (0 -> false, 1 -> true), then auto string conversion and concatenation

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1", (1 || 2) results 1 (1 -> true already), then auto string conversion and concatenation

console.log("0 && 1 = "+(0 && 1));
// "0 && 1 = 0", The logical AND operator returns first falsy value found, (0 && 1) results 0 (0 -> false already), then auto string conversion and concatenation

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2", The logical AND operator returns last truthy value if no falsy value is found, then auto string conversion and concatenation

console.log(false == '0')
// true, when ==, JS will do type coercion first, the string "0" will be converted to a numeric 0, 0 is considered falsy in JS.

console.log(false === '0')
// false, data types are different, Boolean vs String
