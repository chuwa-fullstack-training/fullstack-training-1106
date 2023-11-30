/** Implement a User class with a private variable #password (Use closure, not # syntax).
 * The class should have methods to setPassword and checkPassword.
 * 
 * Example:
 * const user = new User();
 * user.setPassword('123456');
 * user.checkPassword('123456'); // true
 * user.checkPassword('123'); // false
 * user.password; // undefined
 * user.setPassword('123'); // Error
 * user.checkPassword('123'); // false
 * user.password; // undefined
 */
function User() {
    // implement here
    let password = null;
    this.setPassword = function(pwd){
        if (pwd.length < 6){
            console.log('Error')
        }
        else{
            password = pwd
        }
    }
    this.checkPassword = function(pwd){
        return pwd === password
    }
}

const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
user.setPassword('123'); // Will throw an error
console.log(user.checkPassword('123')); // false (password not updated due to error)
console.log(user.password); // undefined
