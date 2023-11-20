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
var SingletonES5 = (function () {

  var instance;

  return {
    getInstance: function() {
      if (!instance) {
        instance = new Object();
      }
      return instance;
    }
  }
})(); 

const instance1ES5 = SingletonES5.getInstance();
const instance2ES5 = SingletonES5.getInstance();
console.log(instance1ES5 === instance2ES5); // Output: true


// ES6
class SingletonES6 {
  constructor() {
    if (!SingletonES6.instance) {
      SingletonES6.instance = this;
    }
    return SingletonES6.instance;
  }
}

const instance1ES6 = new SingletonES6();
const instance2ES6 = new SingletonES6();
console.log(instance1ES6 === instance2ES6);


