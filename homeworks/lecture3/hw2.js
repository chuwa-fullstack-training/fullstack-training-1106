/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a, b) {
    // implement here
    if (arguments.length == 2) {
        return a + b;
    } else if (arguments.length == 1) {
        return nextArg => a + nextArg;
    } else {
        return -1; // unsupported call
    }
}
module.exports = sum;
