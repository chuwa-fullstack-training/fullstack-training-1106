/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(num1, num2) {
    // implement here
    if (num2 != undefined) return num1 + num2;
    return function(n) {
        return num1 + n;
    }
}

console.log(sum(2)(3) === 5)    // true
console.log(sum(2, 3) === 5)    // true