/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    return arguments.length === 2   //were two arguments passed?
    ? arguments[0] + arguments[1]   //yes: return their sum
    : (b) => arguments[0] + b         //no:  return a function
}

console.log(sum(2, 3) === 5)
