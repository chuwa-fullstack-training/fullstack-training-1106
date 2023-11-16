/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// Before ES6:
var Singleton = (function () {
    let privateInstance;
    function Singleton() {
        if (!privateInstance) privateInstance = this;

        return privateInstance;
    }
    return Singleton;
})();

//Singleton.prototype.instance = {};
let in1 = new Singleton();
let in2 = new Singleton();
console.log(in1);
console.log(in2);
console.log(in1 == in2);

// After ES6:

class Singleton1 {
    static #instance;
    constructor() {
        if (!Singleton1.#instance) {
            Singleton1.#instance = this;
        }
        return Singleton1.#instance;
    }
}
in1 = new Singleton1();
in2 = new Singleton1();
console.log(in1);
console.log(in2);
console.log(in1 == in2);