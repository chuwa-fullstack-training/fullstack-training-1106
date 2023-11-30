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
    let password = "";
    let passwordSet = false;

    function setPassword(passwd) {
        if (passwordSet) {
            throw new Error("Password already exists!");
        }
        password = passwd;
        passwordSet = true;
    }

    function checkPassword(passwd) {
        return passwd === password;
    }

    return { setPassword: setPassword, checkPassword: checkPassword }
}
const user = new User();
user.setPassword('123456');
console.log(user.checkPassword('123456')); // true
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined
try {
    user.setPassword('123');
}
catch (e) {
    console.log(e.message);
}
// user.setPassword('123'); // Error
console.log(user.checkPassword('123')); // false
console.log(user.password); // undefined