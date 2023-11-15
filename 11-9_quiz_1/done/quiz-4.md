What is IIFE(Immediately Invoked Function Expression)? [JS]
follow up: what's the primary reason to use IIFE?




Answer:





IFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,

(function () {
  // logic here
})();

follow up: The primary reason to use an IIFE is to obtain data privacy because any variables declared within the IIFE cannot be accessed by the outside world. i.e, If you try to access variables with IIFE then it throws an error as below,

(function () {
  var message = "IIFE";
  console.log(message);
})();

console.log(message); //Error: message is not defined