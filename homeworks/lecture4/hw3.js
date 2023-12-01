/** implement Singleton pattern in both ES5 and ES6
 * https://en.wikipedia.org/wiki/Singleton_pattern
 * 
 * Example:
 * const instance1 = new Singleton();
 * const instance2 = new Singleton();
 * console.log(instance1 === instance2); // Output: true
 */

// your code here
{
    function Singleton(){
    
        if(Singleton.instance === undefined){
            Singleton.instance = this;
        }
        
        return Singleton.instance;
    }
    
    const instance1 = new Singleton();
    const instance2 = new Singleton();
    console.log("ES5: ",instance1 ===  instance2); // Output: true
}

{
    class Singleton{
        constructor(){
            if( Singleton.instance === undefined){
                Singleton.instance = this;
            }
            return Singleton.instance;
        }
    }
    const instance1 = new Singleton();
    const instance2 = new Singleton();
    console.log("ES6: ",instance1 ===  instance2); // Output: true
}
