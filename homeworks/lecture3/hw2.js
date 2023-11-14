/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...rest) {
    // implement here
    if (rest.length == 2) {
        return rest[0] + rest[1];
    }

    if (rest.length == 1) {
        return function (rhs) {
            return rest[0] + rhs;
        };
    }
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);