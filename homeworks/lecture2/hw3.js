// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2); // 0.30000000000000004, addition with numbers, the tail number is due to floating-point precision error

console.log(0.1 + 0.2 == 0.3); // false, as mentioned above, 0.1 + 0.2 == 0.30000000000000004 is true

console.log(1 +  "2" + "2"); // 122, the addition with a string `1 + "2"` converts `1` to a string `1 + "2" = "12"`, then we have `"12" + "2" = "122"`

console.log(1 +  +"2" + "2"); // 32, first `1 + +"2"` is `1 + 2 = 3`, then addition with a string `3 + "2" = "32"`

console.log(1 +  -"1" + "2"); // 02, same as above

console.log(+"1" +  "1" + "2"); // 112, same with the 122 case before

console.log( "A" - "B" + "2"); // NaN2, `"A" - "B" = NaN`, then addition with a string converts `NaN` to `"NaN" + "2" = "NaN2"`

console.log( "A" - "B" + 2); // NaN, `"A" - "B" = NaN`, then addition with a number `NaN + 2 = NaN`

console.log("0 || 1 = "+(0 || 1)); // 0 || 1 = 1, `(0 || 1) = 1` then addition with a string converts `1` to a string `"0 || 1 = " + 1 = "0 || 1 = 1"`

console.log("1 || 2 = "+(1 || 2)); // 1 || 2 = 1, same as above

console.log("0 && 1 = "+(0 && 1)); // 0 && 1 = 0, same as above

console.log("1 && 2 = "+(1 && 2)); // 1 && 2 = 2, same as above

console.log(false == '0') // true, `false` is converted to zero and `'0'` is converted to zero too

console.log(false === '0') // false, types are different
