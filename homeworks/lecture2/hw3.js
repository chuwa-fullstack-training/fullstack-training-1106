// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// output: 0.3000...004
// reason: decimal numbers are stored as binary, ex: 0.1 is stored as 0.00110011... where each number after dot represent 1/(2^x), and 0.1 would be the rounded sum of the representation. The same goes for 0.2. Thus, computing sum between 2 binary numbers with rounding errors would result in rounding errors (the 4 at the end).

console.log(0.1 + 0.2 == 0.3);
// false
// reason 0.3 !== 0.300..04

console.log(1 +  "2" + "2");
// "122"
// reason: type coercion in JS will turn 1 into "1"

console.log(1 +  +"2" + "2");
// "32"
// reason: expression eqivalent to console.log(1 +  (+"2") + "2");, where (+"2") evaluates to 2 (+ is a unary operator). Then 1+2=3 => 3+"2"="32"

console.log(1 +  -"1" + "2");
// "02"
// reason: expression eqivalent to console.log(1 +  (-"1") + "2"); (-"1") = 1 => 1-1=0 => 0+"2" = "02"
// - is treated as unary operator

console.log(+"1" +  "1" + "2");
// "112"
// reason: +"1" = 1 => 1 + "1" = "11" => "11"+"2" = "112", first + is treated as unary operator

console.log( "A" - "B" + "2");
// "NaN2"
// reason: - can be binary subtraction or unary operator, which JS will try to subtract "A" from "B". This will result in NaN because "A" & "B" cannot be converted to number. Then, NaN + "2" = "NaN2" where NaN is converted to a string.

console.log( "A" - "B" + 2);
// NaN
// reason: "A" - "B" = NaN => NaN + 2 = NaN (NaN plus any number will be NaN)

console.log("0 || 1 = "+(0 || 1));
// “0 ｜｜ 1 = 1”
// reason: (0 || 1) will evaluate to 1 (because 0 is false), "0 || 1 = "+1 = "0 ｜｜ 1 = 1" because of string coercion

console.log("1 || 2 = "+(1 || 2));
// "1 || 2 = 1"
// reason: (1 || 2) will evaluate to 1 because 1 is true, and after a true value, or will not be evaluated further

console.log("0 && 1 = "+(0 && 1));
// "0 && 1 = 0"
// reason: (0 && 1) will be evaluated to 0 because 0 is false, and if first value of && is false, the expression will not be evaluated further

console.log("1 && 2 = "+(1 && 2));
// "1 && 2 = 2"
// reason: 1 && 2 will evaluated to 2 because 2 is false, and true && false = false

console.log(false == '0')
// true
// reason: because of typr coercion, second expression will be evaluated as a boolean, and '0' is false, and false == false is true

console.log(false === '0')
// false
// reason: === means strict equal, the first expression is boolean and second expression is string, they have different type, thus no type coercion will be performed