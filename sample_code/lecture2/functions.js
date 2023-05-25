function sayHello() {
  console.log('Hello, World!');
}

sayHello(); // Outputs: Hello, World!

function add(a, b) {
  return a + b;
}

let sum = add(5, 3);
console.log(sum); // Outputs: 8

let greet = function (name) {
  console.log('Hello, ' + name + '!');
};

greet('Aaron'); // Outputs: Hello, Aaron!

let person = {
  name: 'Aaron',
  greet: function () {
    console.log('Hello, ' + this.name + '!');
  }
};

person.greet(); // Outputs: Hello, Aaron!


/**
 * `this` context
 */
var o = {
  // An object o.
  m: function () {
    // Method m of the object.
    var self = this; // Save the this value in a variable.
    console.log(this === o); // Prints "true": this is the object o.
    f(); // Now call the helper function f().
    function f() {
      // A nested function f
      console.log(this === o); // "false": this is global or undefined
      console.log(self === o); // "true": self is the outer this value.
    }
  }
};
o.m(); // Invoke the method m on the object o.


/**
 * call and apply
 */
let person1 = { firstName: 'Aaron', lastName: 'Zhang' };
let person2 = { firstName: 'Alex', lastName: 'Chen' };

function greet(greeting) {
  console.log(greeting + ', ' + this.firstName + ' ' + this.lastName);
}

greet.call(person1, 'Hello'); // Outputs: Hello, Aaron Zhang
greet.call(person2, 'Hi'); // Outputs: Hi, Alex Chen

// apply
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

getMaxOfArray([1, 2, 3]); // Outputs: 3


/**
 * function arguments 
 */
function foo(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
}
foo(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function bar(a, b, c) {
  console.log(a, b, c);
  console.log(arguments);
}
bar(1);


/**
 * functions as values
 */
// Function to greet a person
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// Function that takes another function as an argument
function greetUser(greetingFunction, name) {
  greetingFunction(name);
}

// Assigning the greet function to a variable
var sayHello = greet;

// Using the sayHello variable as a function
sayHello('John');

// Passing the greet function as an argument to greetUser
greetUser(greet, 'Alice');

// Function returning another function
function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

// Creating a function that multiplies by 5
var multiplyByFive = createMultiplier(5);

// Using the returned function
console.log(multiplyByFive(10)); // Output: 50
console.log(multiplyByFive(7)); // Output: 35

/**
 * Immediately Invoked Function Expression (IIFE)
 */
// Namespace function for utilities
var Utils = (function () {
  // Private variable
  var count = 0;

  // Private function
  function incrementCount() {
    count++;
  }

  // Public function
  function getCount() {
    return count;
  }

  // Expose public functions
  return {
    incrementCount: incrementCount,
    getCount: getCount
  };
})();

// Using the namespace functions
Utils.incrementCount();
Utils.incrementCount();
console.log(Utils.getCount()); // Output: 2