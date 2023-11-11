// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/**
 * Answer: 0.30000000000000004
 * JavaScript uses IEEE-754 basic 64-bit binary floating-point for its Number type. 
 * Using IEEE-754, the result of .1 + .2 is exactly 0.3000000000000000444089209850062616169452667236328125. 
 * This results from:
 * Converting “.1” to the nearest value representable in the Number type.
 * Converting “.2” to the nearest value representable in the Number type.
 * Adding the above two values and rounding the result to the nearest value representable in the Number type.
 * 
 * When formatting this Number value for display, 
 * “0.30000000000000004” has just enough significant digits to uniquely distinguish the value. 
 * To see this, observe that the neighboring values are:
 * 0.299999999999999988897769753748434595763683319091796875,
 * 0.3000000000000000444089209850062616169452667236328125, and
 * 0.300000000000000099920072216264088638126850128173828125.
 * If the conversion to a decimal numeral produced only “0.3000000000000000”, 
 * it would be nearer to 0.299999999999999988897769753748434595763683319091796875 than 
 * to 0.3000000000000000444089209850062616169452667236328125. 
 * Therefore, another digit is needed. When we have that digit, “0.30000000000000004”, 
 * then the result is closer to 0.3000000000000000444089209850062616169452667236328125 than to either of its neighbors.
 */

console.log(0.1 + 0.2 == 0.3);
/**
 * Answer: false
 * 0.1 + 0.2 == 0.30000000000000004
 */

console.log(1 +  "2" + "2");
/**
 * Answer: 122
 * "2" is string, Javascript convert 1 to string, so result will be 122.
 */

console.log(1 +  +"2" + "2");
/**
 * Answer: 32
 * + operand in front of a string converts it to number. so +"2" will become number 2 and the result will be 3.
 * and the second "2" is still string, so the final result will be 32.
 */

console.log(1 +  -"1" + "2");
/**
 * Answer: 02
 * - operand in front of a string converts it to number. so -"1" will become number 1 and the result will be 0.
 * and "2" is still string, so the final result will be 02.
 * 
 */

console.log(+"1" +  "1" + "2");
/**
 * Answer: 112
 * + operand in front of a string converts it to number. so +"1" will become number 1.
 * and the second "1" is still string, will convert it to string concatenation
 * so the final result will be 112.
 */

console.log( "A" - "B" + "2");
/**
 * Answer: NaN2
 * "A" and "B" are both string, substract string will result NaN, and NaN append string, will be NaN2.
 */

console.log( "A" - "B" + 2);
/**
 * Answer: NaN
 * "A" and "B" are both string, substract string will result NaN, and NaN add  number 2, will be NaN.
 */

console.log("0 || 1 = "+(0 || 1));
/**
 * Answer: 0 || 1 = 1
 * "0 || 1 = " is string, and (0 || 1) is first truthy value which is 1, will concad to string, so result will be 0 || 1 = 1.
 */

console.log("1 || 2 = "+(1 || 2));
/**
 * Answer: 1 || 2 = 1
 * "1 || 2 = " is string, and (1 || 2) is first truthy value which is 1, will concad to string, so result will be 1 || 2 = 1.
 */

console.log("0 && 1 = "+(0 && 1));
/**
 * Answer: 0 && 1 = 0
 * "0 && 1 = " is string, and (0 && 1) is first falsey value which is 0, will concad to string, so result will be 0 && 1 = 0.
 */

console.log("1 && 2 = "+(1 && 2));
/**
 * Answer: 1 && 2 = 2
 * "1 && 2 = " is string, and (1 && 2) returns the last value because 1 && 2 is truthy. 
 * And will concad to string, so result will be 1 && 2 = 2.
 */

console.log(false == '0')
/**
 * Answer: true
 * == checks whether two value is equal, and perform type coercion to convert 0 to false, so result is true.
 */

console.log(false === '0')
/**
 * Answer: false
 * === checks both value and type, type of false is boolean but type of '0' is string, so result is false.
 */
