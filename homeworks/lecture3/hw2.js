/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // implement here
    if (arguments.length == 2) {
        return arguments[0]+arguments[1];
    }
    // using closure
    let a = arguments[0];
    return function(b) {
        return a+b;
    }
}

// test cases
console.assert(sum(2)(3) === 5, "Test 3 failed");
console.assert(sum(2, 3) === 5, "Test 4 failed");
