// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
// 0.30000000000000004
// Floating point will be displayed with precision.

console.log(0.1 + 0.2 == 0.3);
// False
// due to the precision of floating point.

console.log(1 + "2" + "2");
// "122"
// Type Coersion made the 1 to "1".

console.log(1 + +"2" + "2");
// "32"
// +"2" was converted to number 2, 1 + 2 = 3; Then, 3 was converted to string, the result is "32";

console.log(1 + -"1" + "2");
// "02"
// -"1" was converted to number -1, 1 + (-1) = 0, 0 was converted to string, the result is "02";

console.log(+"1" + "1" + "2");
// "112"
// +"1" was coverted to 1, then 1 + "1" + "2", the 1 was converted to string.

console.log("A" - "B" + "2");
// "NaN2"
// subtracting non-numeric string will be NaN, and then plus string "2" will be "NaN2"

console.log("A" - "B" + 2);
// "NaN"
// NaN plus 2 is still NaN

console.log("0 || 1 = " + (0 || 1));
// "0 || 1 = 1"
// (0 || 1) is 0 or 1, which has truthy value 1. The result after type coersion is "0 || 1 = 1"

console.log("1 || 2 = " + (1 || 2));
// "1 || 2 = 1"
// (1 || 2) is 1 or 2, which has first truthy value 1. The result after type coersion is "1 || 2 = 1"

console.log("0 && 1 = " + (0 && 1));
// "0 && 1 = 0"
// (0 %% 1) is 0 and 1, which has a falsy value 0, so(0 && 1) will return 0.

console.log("1 && 2 = " + (1 && 2));
// "1 && 2 = 2"
// (1 %% 2) is 1 and 2, which has two truthy value, so(1 && 2) will return the last truthy value 2.

console.log(false == "0");
// true
// Because of the "==", the type coersion will be performed. false and "0" will be equal under this condition.

console.log(false === "0");
// false
// The type coersion won't happend under "===", false and "0" have different types.
