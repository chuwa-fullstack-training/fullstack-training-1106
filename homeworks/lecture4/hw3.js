/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
function Singleton() {
    if (typeof Singleton._instance  === 'undefined') {
        Singleton._instance = {};
    }
    return Singleton._instance;
}

class ES6Singleton {
    static _instance;
    constructor() {
        if (typeof ES6Singleton._instance === 'undefined') {
            ES6Singleton._instance = this;
        }
        return ES6Singleton._instance;
    }
}
module.exports = {
    Singleton,
    ES6Singleton
}