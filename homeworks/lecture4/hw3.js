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
    if(Singleton.instance) {
        return Singleton.instance;
    }
    Singleton.instance = this;
    return this;
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2);

class SingletonClass {
    constructor() {
        if(SingletonClass.instance) {
            return SingletonClass.instance;
        }
        SingletonClass.instance = this;
        return SingletonClass.instance;
    }
}
const instanceCls1 = new SingletonClass();
const instanceCls2 = new SingletonClass();
console.log(instanceCls1 === instanceCls2);
