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
    let password;
    this.setPassword = function (newPassword) {
        if (password) throw new Error("Password cannot be set twice!");
        password = newPassword;
    }
    this.checkPassword = function (checkP) {
        console.log(checkP === password);
    }
}

// test
const user = new User();
user.setPassword('123456');
user.checkPassword('123456');       // true
user.checkPassword('123');          // false
console.log(user.password);         // undefined
try {
    user.setPassword('123');        // Error
} catch(error) {
    console.log("Error: " + error.message);
}
user.checkPassword('123');          // false
console.log(user.password);         // undefined