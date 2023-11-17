/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES6
class Singleton {
    static #instance;
    // new instance is created before constructor is called
    // Singleton.#instance refers to static var
    constructor() { 
        if (Singleton.#instance === undefined) {
            Singleton.#instance = this;   // "this" refer to the instance
        }
        return Singleton.#instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.assert(instance1 === instance2, "Test 1 failed.");

// ES5
let instance;
function Singleton2() {
    if (instance === undefined) {
        instance = this;
    }
    return instance;
}

const instance3 = new Singleton2();
const instance4 = new Singleton2();
console.assert(instance3 === instance4, "Test 2 failed.");