/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(a, b) {
    // implement here
    return b!= undefined ? a + b : function(b){return a + b}
}

console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)