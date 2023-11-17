6. What is a rest parameter? 

What happens if you do not use rest parameter as a last argument?

eg :
fn(a, ...b, c) {

}












Rest parameter is an improved way to handle function parameters which allows us to represent an indefinite number of arguments as an array. 
The syntax would be as below,

function f(a, b, ...theArgs) {
  // ...
}

// Use rest to enclose the rest of specific user-supplied values into an array:
function myBio(firstName, lastName, ...otherInfo) { 
  return otherInfo;
}

// Invoke myBio function while passing five arguments to its parameters:
myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

// The invocation above will return:
["CodeSweetly", "Web Developer", "Male"]