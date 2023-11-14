/** write a function to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(x,y) {
    // implement here
    if (arguments.length === 1){
        return function (y) {
            return x + y;
        }
    }
    else{
        return x + y;
    }

}
