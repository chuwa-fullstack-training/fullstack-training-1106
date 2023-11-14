/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum1(a) {
    return function(b) {
        return a + b;
    }
}
console.log(sum1(2)(3));

function sum2() {
    // implement here
    return arguments[0] + arguments[1];
}
console.log(sum2(2, 3));
