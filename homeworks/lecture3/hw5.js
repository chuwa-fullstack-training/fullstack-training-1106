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

    function setPassword(p){
        if(password !== null){
            return console.log("Error");
        }

        password = p;
    }

    function checkPassword(p){
        if(password === null){
            return console.log("false");
        }

        if(password === p){
            return console.log("true");
        }
        else{
            return console.log("false");
        }
    }

    return {
        setPassword: setPassword,
        checkPassword: checkPassword
    };
}

const user = new User();
user.setPassword('123456');
user.checkPassword('123456');
user.checkPassword('123');
console.log(user.password);
user.setPassword('123');
user.checkPassword('123');