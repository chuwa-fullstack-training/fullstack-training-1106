// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// explanation: 0.1 + 0.2 = 0.30000000000000004 because of floating point precision
// float 不精准，所以 0.1 + 0.2 不等于 0.3
console.log(0.1 + 0.2 == 0.3);
// false
// explanation: 0.1 + 0.2 == 0.3 is false because of floating point precision
// float 不精准，所以 0.1 + 0.2 不等于 0.3

console.log(1 +  "2" + "2");
"122"
// explanation: 1 +  "2" + "2" is "122" because of type coercion
// 1 +  "2" + "2" 1 被转换成字符串，然后 1 +  "2" = "12"，然后 "12" + "2" = "122"

console.log(1 + +"2" + "2");
// 32
// +"2" 被转换成int 2
console.log(1 +  -"1" + "2");
// 02
// -"1" 被转换成int -1
console.log(+"1" +  "1" + "2");
// 112
// +"1" 被转换成int 1
// 1 +  "1" + "2" = "112"
console.log( "A" - "B" + "2");
// NaN2
// "A" - "B" = NaN
// NaN + "2" = "NaN2"
console.log( "A" - "B" + 2);
// NaN
// "A" - "B" = NaN
// NaN + 2 是无效的，所以是 NaN
console.log("0 || 1 = "+(0 || 1));
// 0 || 1 = 1
// false || true = true
console.log("1 || 2 = "+(1 || 2));
// 1 || 2 = 1
// true || true = true 1
console.log("0 && 1 = "+(0 && 1));
// 0 && 1 = 0
// false && true = false
console.log("1 && 2 = "+(1 && 2));
// 1 && 2 = 2
// true && true = true 1
console.log(false == '0')
// true
console.log(false === '0')
// false
// false is boolean, '0' is string