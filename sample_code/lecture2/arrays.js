// Creating an empty array
var emptyArray = [];

// Creating an array with initial values
var numbers = new Array();
numbers.push(1);
numbers.push(2);
numbers.push(3);

console.log(Array.of(7)); // creates an array with a single element, [7]
console.log(Array.of(1, 2, 3)); // creates an array with three elements, [1, 2, 3]
console.log(Array.from('foo')); // creates an array with three elements: ['f', 'o', 'o']
console.log(
  Array.from([1, 2, 3], function (x) {
    return x * x;
  })
); // [1, 4, 9]

// Creating an array using the Array constructor
var fruits = new Array('apple', 'banana', 'orange');

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: banana

// Modifying array elements
numbers[2] = 10;
console.log(numbers); // Output: [1, 2, 10, 4, 5]

// Adding elements to the end of an array
fruits.push('mango');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango']

// Getting the length of an array
console.log(numbers.length); // Output: 5

// Iterating over an array
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


/**
 * Adding and removing elements
 */
// Creating an array
var fruits = ['apple', 'banana', 'orange'];

// Adding elements to the end of the array
fruits.push('mango', 'kiwi');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'mango', 'kiwi']

// Adding elements to the beginning of the array
fruits.unshift('grape', 'pineapple');
console.log(fruits); // Output: ['grape', 'pineapple', 'apple', 'banana', 'orange', 'mango', 'kiwi']

// Removing the last element from the array
var lastFruit = fruits.pop();
console.log(lastFruit); // Output: kiwi
console.log(fruits); // Output: ['grape', 'pineapple', 'apple', 'banana', 'orange', 'mango']

// Removing the first element from the array
var firstFruit = fruits.shift();
console.log(firstFruit); // Output: grape
console.log(fruits); // Output: ['pineapple', 'apple', 'banana', 'orange', 'mango']

// Removing elements from a specific position in the array
var removedFruit = fruits.splice(2, 1);
console.log(removedFruit); // Output: ['banana']
console.log(fruits); // Output: ['pineapple', 'apple', 'orange', 'mango']

// Adding elements at a specific position in the array
fruits.splice(1, 0, 'cherry', 'kiwi');
console.log(fruits); // Output: ['pineapple', 'cherry', 'kiwi', 'apple', 'orange', 'mango']
