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
    const user = {};
    user.__proto__ = User.prototype;
    let password = "";
    let passwordSet = false;

    User.prototype.setPassword = function (p) {
        if (passwordSet) {
            throw new Error("Password already set");
        }
        password = p;
        passwordSet = true;
    }

    User.prototype.checkPassword = function (p) {
        return p === password;
    }
}

// test cases
const user = new User();
user.setPassword('123456');
console.assert(user.checkPassword('123456') === true, "Test 1 failed.");
console.assert(user.checkPassword('123') === false, "Test 2 failed.");
console.assert(user.password === undefined, "Test 3 failed.");

try {
    user.setPassword('123');
} catch (e) {
    console.assert(e.message === "Password already set", "Test 4 failed.");
}
console.assert(user.checkPassword('123') === false, "Test 5 failed.");
console.assert(user.password === undefined, "Test 6 failed.");


// implementation w/o prototype
function UserSimple() {
    // implement here
    let password = "";
    let passwordSet = false;

    function setPassword(p) {
        if (passwordSet) {
            throw new Error("Password already set");
        }
        password = p;
        passwordSet = true;
    }

    function checkPassword(p) {
        return p === password;
    }

    return { setPassword: setPassword, checkPassword: checkPassword }
}
