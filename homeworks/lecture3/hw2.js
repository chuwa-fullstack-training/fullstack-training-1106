/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (arguments.length == 2) return arguments[0] + arguments[1];
    var a = arguments[0];
    var subSum = function(b){ return a+b;}
    return subSum;
}
console.log(sum(2,3));
console.log(sum(2)(3));
