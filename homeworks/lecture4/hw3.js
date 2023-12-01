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
var SingletonES5 = (function() {
    // var instance;

    function SingletonES5() {
        this.instance = "Singleton";
        return this.instance;
    }
    return SingletonES5;
})()

const instance1 = new SingletonES5();


// ES6
class SingletonES6 {
    constructor() {
        this.instance = "Singleton";
        return this.instance;
    }
};


const instance2 = new SingletonES6();
// console.log(new SingletonES5() === new SingletonES6());
console.log(instance1 == instance2); // Output: true
console.log(typeof instance1, " ---> ", instance1);
console.log(typeof instance2, " ---> ", instance2);