/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// ES5 uses IIFE to create a Singleton
var Singleton = (function() {
    var instance;

    function createInstance() {
        var object = new Object('Singleton');
        return object;
    }

    return function() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    }
})();




// ES6 uses class to implement singleton

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Object('Singleton');
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);
