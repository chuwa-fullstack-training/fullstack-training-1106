/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

//ES5
var SingletonES5 = (function() {
    var instance;
    function Singleton() {
        if(instance) {
            return instance;
        }
        instance = this;
    }
    Singleton.getInstance = function() {
        return instance || new Singleton();
    }
    return Singleton;
}());

const instance1ES5 = new SingletonES5();
const instance2ES5 = new SingletonES5();
console.log(instance1ES5 === instance2ES5);

//ES6
class SingletonES6 {
    constructor() {
        if(SingletonES6.instance) {
            return SingletonES6.instance
        }
        SingletonES6.instance = this;
    }
}

const instance1ES6 = new SingletonES6();
const instance2ES6 = new SingletonES6();
console.log(instance1ES6 === instance2ES6); 
