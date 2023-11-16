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
    let passwd = null;
    function setPassword(pwd) {
        if (passwd === null) {
            passwd = pwd;
            return true; // return bool for testing
        } else {
            // console.log("[*] setPassword failed.");
            return false; // return bool for testing
        }
    }
    function checkPassword(pwd) {
        if (pwd === passwd) {
            return true;
        }
        return false;
    }
    return {
        setPassword,
        checkPassword,
    }
}
module.exports = User;