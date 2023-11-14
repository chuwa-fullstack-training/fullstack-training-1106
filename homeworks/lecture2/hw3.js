// What would be the output of following code?
// Explain your answer.

console.log(0.1 + 0.2);
/**
 * Output: 0.30000000000000004
 *
 * Due to floating-point arithmetic,
 * 0.1 and 0.2 can not be precisely represented
 * in their floating-point binary form.
 * As a result, there will be a rounding error
 * when calculating 0.1 + 0.2,
 * which leads to ​​0.30000000000000004.
 *
 */
console.log(0.1 + 0.2 == 0.3);
/**
 * Output: false
 *
 * Since 0.1 + 0.2 is not 0.3 due to
 * floating-point issues, the result
 * evaluates to false which is expected
 *
 */
console.log(1 + "2" + "2");
/**
 * Output: 122
 *
 * 1 + "2" will first convert number to string
 * and then concatenate them to "12".
 * "12" + "2" will concatenated to "122".
 *
 */
console.log(1 + +"2" + "2");
/**
 * Ouput: 32
 *
 * +"2" will convert the string "2" to a number 2.
 * Then, 1 + 2 will lead to a result of 3.
 * 3 + "2" will convert 3 to a string then
 * concatenate "3" and "2" to a result "32".
 *
 */
console.log(1 + -"1" + "2");
/**
 * Output: 02
 *
 * -"1" will convert string "1" to number 1
 * and then negate 1 to -1.
 * 1 + (-1) will lead to a result of 0.
 * 0 + "2" will convert 0 to a string "0"
 * then concatenate "0" and "2" to a result
 * "02"
 *
 */
console.log(+"1" + "1" + "2");
/**
 * Output: 112
 *
 * +"1" will convert string "1" to a number 1.
 * 1 + "1" will convert first number 1 back to
 * string "1" and then concatenate "1" with "1"
 * to a result "11". "11" + "2" will then
 * concatenate them to a result "112".
 *
 */
console.log("A" - "B" + "2");
/**
 * Output: "NaN2"
 *
 * "A" - "B" will try to convert both sides
 * to numbers. But it fails so both sides will
 * be NaN and NaN. Subtracting NaN with
 * NaN, the result will still be NaN.
 * NaN + "2" will convert NaN number to string
 * "NaN" and then concatenate "NaN" and "2" to
 * a result "NaN2".
 *
 */
console.log("A" - "B" + 2);
/**
 * Output: "NaN"
 *
 * "A" - "B" will turns to a number NaN as
 * explained in the last question,
 * NaN will then be added with 2 which will
 * results in NaN, a number. Then it is
 * output to the console.
 *
 */
console.log("0 || 1 = " + (0 || 1));
/**
 * Output: 0 || 1 = 1
 *
 * 0 || 1 will return the first element that
 * is evaluated to true. Since 0 is converted
 * to false and 1 is converted to true. 1 is
 * the first element with result true. So it
 * is selected. 1, the number is concateneated
 * to "0 || 1 = " to create an output
 * "0 || 1 = 1"
 *
 */
console.log("1 || 2 = " + (1 || 2));
/**
 * Output: 1 || 2 = 1
 *
 * 1 || 2 will return the first element that
 * is evaluated to true. Since 1 is converted
 * to true first and 2 is converted to true latter.
 * 1 is the first element with result true. So it
 * is selected. 1, the number is concateneated
 * to "1 || 2 = " to create an output
 * "1 || 2 = 1"
 *
 */
console.log("0 && 1 = " + (0 && 1));
/**
 * Output: 0 && 1 = 0
 *
 * 0 && 1 will return the first element that is
 * evaluated to false. Since 0 is converted to
 * false and 1 is converted to true. 0 is the
 * first element that is evaluated to false.
 * 0 is selected. 0 will then convert to "0"
 * and "0" is concatenate to "0 && 1 = " at
 * the end which output "0 && 1 = 0"
 *
 */
console.log("1 && 2 = " + (1 && 2));
/**
 * Output: 1 && 2 = 2
 *
 * 1 && 2 will return the first element that
 * is evaluated to false. Since there is no
 * such element, the last element that is
 * evaluated to true will be selected which in
 * this case is number 2. Number 2 is then
 * converted to String "2" which then is
 * concatenated to String "1 && 2 = " resulting
 * in "1 && 2 = 2"
 *
 */
console.log(false == "0");
/**
 * Output: true
 *
 * == will perform type coercion on both sides.
 * false will be converted to 0 and "0" will
 * be converted to 0. Number 0 is then compared with
 * Number 0 which evaluate to true as a result.
 *
 */
console.log(false === "0");
/**
 * Ouput: false
 *
 * === will perform strict comparasion.
 * Since both sides are not of the same type.
 * The result is false.
 *
 */
