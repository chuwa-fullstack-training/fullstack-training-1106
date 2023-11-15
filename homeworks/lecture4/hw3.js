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
function Singleton1() {
    // a function property "instance" directly attached to the Singleton1 function. Functions in JavaScript are objects and can have properties.
    if (Singleton1.instance) {
        return Singleton1.instance;
    }
    // the current context (this, which refers to the new object being created) is assigned to Singleton1.instance property
    Singleton1.instance = this;
}
const instance1 = new Singleton1();
const instance2 = new Singleton1();
console.log(instance1 === instance2);   // Output: true

// ES6
class Singleton2 {
    constructor() {
        if (Singleton2.instance) {
            return Singleton2.instance;
        }
        Singleton2.instance = this;
    }
}
const instance3 = new Singleton2();
const instance4 = new Singleton2();
console.log(instance3 === instance4);   // Output: true