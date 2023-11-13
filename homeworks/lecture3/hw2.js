/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 1) {
        return function (y) {
            return arguments[0] + y;
        };
    }
}

// Test cases
console.log(sum(2, 3) === 5);
console.log(sum(2)(3) === 5);
