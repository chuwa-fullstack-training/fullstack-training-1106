/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(num1, num2) {
    // implement here
    if (!num2) {
        return function(num) {
            return num + num1;
        }
    }
    else {
        return num1 + num2;
    }
}

console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);
