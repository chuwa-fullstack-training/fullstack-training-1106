/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// ES 5 Singleton
let instance;
function SingletonES5() {
    if (instance === undefined) {
        instance = this;
    }
    return instance;
}
const instance1 = new SingletonES5();
const instance2 = new SingletonES5();
console.log("ES5 Singleton");
console.log(instance1 === instance2); // Output: true
console.assert(instance1 === instance2, 'ES5 Singleton failed');
// ES 6 Singleton
class SingletonES6 {
    static #instance;
    constructor() {
        if (SingletonES6.#instance === undefined) {
            SingletonES6.#instance = this;
        }
        return SingletonES6.#instance;
    }
}
const instance3 = new SingletonES6();
const instance4 = new SingletonES6();
console.log("ES6 Singleton");
console.log(instance3 === instance4); // Output: true
console.assert(instance3 === instance4, 'ES6 Singleton failed');