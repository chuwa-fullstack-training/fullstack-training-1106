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
    let is_first = true;
    this.setPassword = function (new_password) {
        if (is_first) {
            password = new_password;
            is_first = false;
        }
        else {
            console.log("Error.");
        }

    }
    this.checkPassword = function (p) {
        console.log(p == password);
        return p == password;
    }
}

const user = new User();
user.setPassword('123456');
user.checkPassword('123456'); // true
user.checkPassword('123'); // false
console.log(user.password); // undefined
user.setPassword('123'); // Error
user.checkPassword('123'); // false
console.log(user.password); // undefined
