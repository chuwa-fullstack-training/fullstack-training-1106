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

  var password;

  function setPassword(newPassword) {
    if (password === undefined) {
      password = newPassword;
    } else {
      throw new Error("Password already set.");
    }
  }

  function checkPassword(checkPassword) {
    return Boolean(password) && password === checkPassword;
  }

  return {
    setPassword: setPassword,
    checkPassword: checkPassword,
  }
}

const user = new User();
console.log(user.checkPassword('123456'));
user.setPassword('123456');
console.log(user.checkPassword('123456'));
console.log(user.checkPassword('123'));
console.log(user.password);
console.log(user.setPassword('123'));