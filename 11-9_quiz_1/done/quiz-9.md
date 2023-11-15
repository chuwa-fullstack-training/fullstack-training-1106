What is Closure? What is Hoisting? [JS]




Answer:






A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains

function Welcome(name) {
  var name = name;
  
  var greetingInfo = function (message) {
    console.log(message + " " + name);
  };
  return greetingInfo;
}
var myFunction = Welcome("John");
myFunction("Welcome "); //Output: Welcome John
myFunction("Hello Mr."); //output: Hello Mr.John



Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,

console.log(message); 
var message = "The variable Has been hoisted";

|||

var message;
console.log(message);
message = "The variable Has been hoisted";

|||

message("Good morning"); //Good morning
function message(name) {
  console.log(name);
}