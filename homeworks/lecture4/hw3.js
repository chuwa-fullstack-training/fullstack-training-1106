/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
function Singleton(a,b){
    if(this.status != null){
        return Singleton.prototype.status;
    }else{
        this.a = a;
        this.b = b;
        Singleton.prototype.status = this;
    }
}
// Singleton.prototype.status = null;
// Singleton.prototype.destory = function(){
//     Singleton.prototype.status = null;
// }

const instance1 = new Singleton(1,2);
const instance2 = new Singleton(3,4);
console.log(instance1 === instance2)
