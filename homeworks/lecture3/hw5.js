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
    var password;

    function setPassword(str) {
        if (password === undefined) {
            password = str;
            console.log('Password set successfully.');
        }
        else {
            console.error('Error');
        }
    }

    function checkPassword(str) {
        console.log(`The password is ${password == str ? 'correct' : 'wrong'}`);
    }

    return {
        setPassword,
        checkPassword
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