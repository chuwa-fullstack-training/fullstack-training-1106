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
// 122
// when doing "+" operator with a string and a number in JS, JS will automatically
// convert the number to string

console.log(1 +  +"2" + "2");

console.log(1 +  -"1" + "2");

console.log(+"1" +  "1" + "2");

console.log( "A" - "B" + "2");

console.log( "A" - "B" + 2);

console.log("0 || 1 = "+(0 || 1));

console.log("1 || 2 = "+(1 || 2));

console.log("0 && 1 = "+(0 && 1));

console.log("1 && 2 = "+(1 && 2));

console.log(false == '0')

console.log(false === '0')
