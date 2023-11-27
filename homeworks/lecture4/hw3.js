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
var Singleton = (function() {
    var instance;

    function createInstance() {
        var object = new Object();
        return object;
    }

    return function() {
        if (!instance) {
            instance = createInstance();
        }
        return instance;
    };
})();

// ES6
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

