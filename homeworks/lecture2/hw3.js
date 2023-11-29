// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// Number add a Number will return a Number result.
// in JS, Number includes float, so the result would still be a float

console.log(0.1 + 0.2 == 0.3);
// false
// floating number calculation will bring result as a "not precise" floating number 
// due to binary calculation

console.log(1 +  "2" + "2");
// "122"
// when doing "+" operator with a string and a number in JS, JS will automatically
// convert the number to string

console.log(1 +  +"2" + "2");
// "32"
// As '+' in JS has 2 kinds of ways to use: 1. mathematically addition 2. unary plus
// when doing 1 +  it is doing math addition and result is 1
// also as there are 2 + operators, so the second one will be treated as unary plus
// which turns +"2" to number 2
// so 1 + + "2" = 3
// then number 3 add string 2 will transfer to string "32"

console.log(1 +  -"1" + "2");
// "02"
// As '-' in JS has 2 kinds of ways to use: 1. mathematically subtract  2. unary minus
// when doing 1 + - "1", it will turn to 1 + -1 which result is 0
// then 0 + "2" will turn to string "02"

console.log(+"1" +  "1" + "2");
// "112"
// for +"1" it is unary plus so it will turn to number +1 which is 1
// then for 1 + "1" + "2", number 1 will transfer to string and return "112"

console.log( "A" - "B" + "2");
// "NaN2"
// when we are trying to do "A" - "B", JS will try to convert it to number A and B
// however both are not number, so it will be converted to NaN - NaN
// which will result NaN, then number NaN + "2" will convert to string "NaN2"

console.log( "A" - "B" + 2);
// NaN
// when we are trying to do "A" - "B", JS will try to convert it to number A and B
// however both are not number, so it will be converted to NaN - NaN = NaN
// then we calculate number NaN + number 2 which due to them both are number, result will be number NaN

console.log("0 || 1 = "+(0 || 1));
// 1
// as logical OR('||') in JS only evaluate the second only when 1st is false
// and Boolean(0) is false in JS, so it will return the second one, which is 1

console.log("1 || 2 = "+(1 || 2));
// 1
// as logical OR('||') in JS only evaluate the second only when 1st is false
// and Boolean(1) is true, so it will stop and return 1

console.log("0 && 1 = "+(0 && 1));
// 0
// as logical AND('&&') in JS only evaluate the second only when 1st is true
// and Boolean(0) is false, so it will stop and return 0

console.log("1 && 2 = "+(1 && 2));
// 2
// as logical AND('&&') in JS only evaluate the second only when 1st is true
// and Boolean(1) is true, so it will return the second one, which is 2

console.log(false == '0')
// true
// because when we are executing this line, as == is a comparison parentheses, it will try to compare
// 2 elements on each side and as false is a boolean, nothing will change, string '0' will try
// to convert to boolean which change to Boolean('0')
// As JS consider '0' as falsy value, so Boolean('0') = false.
// And false == false, returning true

console.log(false === '0')
// false
// === means strictly equal so that it will compare either the value or the type
// when we compare false and '0', they have different type, so return false
