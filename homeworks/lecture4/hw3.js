/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

// ES5
// function SingletonES5() {
//     #instance;

//     function init() {

//     }
// }

// ES6
const SingletonES6 = (function(){
    const instance = 'Singleton';
    return instance;
})();


// const instance1 = new SingletonES5();
const instance2 = new SingletonES6();
// console.log(instance1 === instance2); // Output: true
console.log(instance2);