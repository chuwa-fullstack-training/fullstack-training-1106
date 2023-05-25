// Object creation using object literal
const myDog = {
  name: 'Cooper',
  age: 1,
  breed: 'Golden Retriever',
  bark: function () {
    console.log('Woof, woof!');
  }
};

// Accessing object properties
console.log("Dog's name:", myDog.name);
console.log("Dog's age:", myDog.age);
console.log("Dog's breed:", myDog.breed);

// Calling object method
myDog.bark();

// Object creation using Object.create function
var myCat = Object.create(Object.prototype, {
  name: {
    value: 'Pepper',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true
  },
  breed: {
    value: 'Domestic Shorthair',
    writable: true,
    enumerable: true,
    configurable: true
  },
  meow: {
    value: function () {
      console.log('Meow, meow!');
    },
    writable: true,
    enumerable: true,
    configurable: true
  }
});

const NAME = 'name';

// Accessing object properties
console.log("Cat's name:", myCat[NAME]);
console.log("Cat's age:", myCat['age']);
console.log("Cat's breed:", myCat['breed']);

// Calling object method
myCat['meow']();

// delete operator
delete myDog.age;
console.log("Dog's age:", myDog.age);

// in operator
console.log('name' in myDog);
for (let property in myDog) {
  if (typeof myDog[property] === 'function') {
    myDog[property]();
  } else {
    console.log(property + ':', myDog[property]);
  }
}

// getter and setter
let student = {
  firstName: 'Aaron',
  lastName: 'Zhang',
  // define getter for fullName
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // define setter for fullName
  set fullName(value) {
    let parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(student.fullName); // Outputs: Aaron Zhang

student.fullName = 'Alex Chen'; // using setter to change name

console.log(student.fullName); // Outputs: Alex Chen
console.log(student.firstName); // Outputs: Alex
console.log(student.lastName); // Outputs: Chen

// Object.defineProperty(student, 'getFullName', {
//   value: function () {
//     return this.firstName + ' ' + this.lastName;
//   },
//   writable: false
// });

// Object.defineProperty(student, 'setFullName', {
//   value: function () {
//     let parts = value.split(' ');
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
//   writable: false
// });

// console.log(student.getFullName()); // Outputs: Alex Chen
