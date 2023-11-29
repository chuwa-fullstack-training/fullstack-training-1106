/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    if (arguments.length === 1) {
        const x = arguments[0];
        return function(y) {
            return x + y;
        };
    } else if (arguments.length === 2) {
        const x = arguments[0];
        const y = arguments[1];
        return x + y;
    } else {
        throw new Error('Invalid number');
    }
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);

