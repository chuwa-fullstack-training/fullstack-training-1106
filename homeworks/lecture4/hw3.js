/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
// Singleton in ES6
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        // Private variables and methods can be placed here
        Singleton.instance = this;
      }
  
      return Singleton.instance;
    }
  }
  
  // Example usage in ES6
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // Output: true