/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 *
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here

//In ES5 style

var Singleton = (function() {
    var instance;

    function createInstance(){
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function(){
            if(instance === undefined){
                instance = createInstance();
            }
            return instance;
        }
    };
})();

//In ES6 style

class Singleton{
    static instance;
    constructor() {
        if(Singleton.instance === undefined){
            Singleton.instance = this;
        }
    }

    static getInstance(){
        return this.instance;
    }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2);


