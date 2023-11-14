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

class User {
    // // implement here
    // #password;

    // constructor() {
    //     this.#password = '';
    // }

    // setPassword(password) {
    //     this.#password = password;
    // }

    // checkPassword(password) {
    //     return this.#password === password;
    // }
    constructor() {
        let password;
    
        this.setPassword = function(newPassword) {
          if (!password) {
            password = newPassword;
          } else {
            throw new Error('Password is already set');
          }
        };
    
        this.checkPassword = function(inputPassword) {
          return password === inputPassword;
        };
    }
}


const user = new User();
console.log(user.setPassword('123456'));
console.log(user.checkPassword('123456'));
console.log(user.checkPassword('123'));
console.log(user.password); // undefined
console.log(user.setPassword('123')); // Error
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
