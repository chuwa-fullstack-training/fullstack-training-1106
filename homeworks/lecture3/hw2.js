/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum(...numbers) {
    // implement here
    if(numbers.length==1){
        return function (n){
            return numbers[0] + n;
        }
    }
    else{
        let res = 0;
        numbers.forEach( n => res+=n);
        return res;
    }
}
console.log(sum(2)(3) === 5)
console.log(sum(2, 3) === 5)
