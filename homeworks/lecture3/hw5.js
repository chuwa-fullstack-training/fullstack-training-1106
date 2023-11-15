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
    var password = "";
    function setPassword(str) {
        password = str;
    }
    function checkPassword(str){
        if(str === password) return true;
        else return false;
    }
    return {
        setPassword: setPassword,
        checkPassword: checkPassword
    }
}

const user = new User();
console.log(user.password);
user.setPassword("iuiu");
console.log(user.checkPassword("iuiu"));
console.log(user.checkPassword("opop"));