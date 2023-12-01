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
   let password = '';
   this.setPassword = function(pwd){
        if(password === ''){
            password = pwd;
        }
        else{
            throw new Error('can not reset password');
        }
        
   }
   this.checkPassword = function(str){
    return password === str;
   }
}

//////////  test cases  /////////////////////
try{
    const user = new User();
    user.setPassword('123456');
    console.log('check:',user.checkPassword('123456'));
    console.log('this.password: ', user.password);
    console.log('check:',user.checkPassword('123'));
    console.log('set:',user.setPassword('123'));
    console.log('check:',user.checkPassword('123'));
    
}catch(error){
    console.log('Error:', error.message);
}

