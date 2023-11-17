/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
var Singleton1 = (function (){
    let instance = null;

    return function () {
        if(!instance){
            instance = new Object();
        }
        return instance;
    }
})();

class Singleton2{
    constructor(){
        if(Singleton2.instance){
            return Singleton2.instance;
        }
        Singleton2.instance = this;
    }
}

const instance1 = new Singleton1();
const instance2 = new Singleton1();
console.log(instance1 === instance2);

const instance3 = new Singleton2();
const instance4 = new Singleton2();
console.log(instance3 === instance4);

