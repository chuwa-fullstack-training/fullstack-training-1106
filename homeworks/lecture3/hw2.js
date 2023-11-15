/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    const args = [...arguments];
    if (arguments.length === 1){
        return function (val){
            return args[0] + val;
        }
    }
    else if (args.length === 2){
        return args[0] + args[1];
    }
    else return null;
}
console.log(sum(2)(3) === 5);
console.log(sum(2, 3) === 5);

