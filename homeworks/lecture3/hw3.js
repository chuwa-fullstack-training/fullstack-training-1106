// this works
function counter() {
    let sum = 0;
    return function (){//use closure to protect private variable sum;
        if(arguments.length > 0){
            sum += arguments[0];
        }       
        return sum;
    }
}
//this does Not work:
// function counter() {
//     let sum = 0;
//     return () => {
//       // Arrow functions do not have their own arguments object.
//       // Instead, they inherit it from the enclosing scope.
//       // So, arguments.length will not work as expected here.
//       // You can use rest parameters to achieve a similar effect.
//       if (arguments.length > 0) {
//         sum += arguments[0];
//       }
//       return sum;
//     };
//   }

let count = counter();
console.log(count);
console.log(count(3));  // Output: 3
console.log(count(5));  // Output: 8 (3 + 5)
console.log(count());   // Output: 8