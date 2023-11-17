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
  if (Singleton.instance) {
    return Singleton.instance;
  }
  Singleton.instance = this;
  return this;
}

class Singleton_ {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    return this;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
const instance3 = new Singleton_();
const instance4 = new Singleton_();
console.log(instance1 === instance2);
console.log(instance3 === instance4);