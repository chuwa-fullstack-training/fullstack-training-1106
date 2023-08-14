// Destructuring an array
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]

// swap variables
let a = 1;
let b = 2;

[a, b] = [b, a];

// Destructuring an object
const person = { name: 'John', age: 30, city: 'Santa Clara' };
// const name = person.name;

const { name, age, city } = person;

// Destructuring an object with a different variable name
const { name: firstName, age: yearsOld, city: hometown } = person;

console.log(firstName); // Output: John
console.log(yearsOld); // Output: 30
console.log(hometown); // Output: New York

// Destructuring an object with a default value
const { zip: postalCode = '95054' } = person;

console.log(postalCode); // Output: 95054

// Desctructuring in function parameters
const printPerson = ({ name, age, city }) => {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
};

printPerson(person); // Output: Name: John, Age: 30, City: New York

// Desctructuring in function parameters with a default value
const printPersonWithDefault = ({ name, age, city = 'Santa Clara' }) => {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
};

printPersonWithDefault(person); // Output: Name: John, Age: 30, City: New York

// Desctructuring in nested objects
const personWithNestedObject = {
  name: 'John',
  age: 30,
  city: 'Santa Clara',
  address: {
    street: '123 Main St',
    zip: '95054'
  }
};

const {
  address: { street, zip }
} = personWithNestedObject;

console.log(street); // Output: 123 Main St

// Desctructuring in nested objects with a default value
const personWithNestedObjectWithDefault = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St'
  }
};

const {
  address: { street: streetAddress, zip: postalCode1 = '95054' }
} = personWithNestedObjectWithDefault;

console.log(streetAddress); // Output: 123 Main St
console.log(postalCode1); // Output: 95054

// Destrucutring in function parameters with nested objects
const printPersonWithNestedObject = ({
  name,
  age,
  address: { street, zip }
}) => {
  console.log(`Name: ${name}, Age: ${age}, Street: ${street}, Zip: ${zip}`);
};

printPersonWithNestedObject(personWithNestedObject); // Output: Name: John, Age: 30, Street: 123 Main St, Zip: 95054
