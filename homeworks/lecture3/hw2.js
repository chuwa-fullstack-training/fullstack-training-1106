/** write a funciton to make the following code work
 * console.log(sum(2)(3) === 5)
 * console.log(sum(2, 3) === 5)
 */
function sum() {
    // console.log("argus: ",arguments);
    let argusArr = Array.from(arguments);
    if(argusArr.length > 1){
        let result = argusArr.reduce((sum, current)=>{
            return sum+=current;
        })
        return result;
    }
    else if(argusArr.length === 1){
        return function (input){
            return argusArr[0] + input;
        }
    }
    else{
        //dummy code
        return;
    }
    // implement here
}
console.log(sum(2,3) === 5);
console.log(sum(2)(3) === 5);
