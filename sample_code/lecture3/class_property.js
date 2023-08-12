class Person {
  name; // public field
  #age; // private field

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    // method to access private field
    return this.#age;
  }

  setAge(newAge) {
    // method to set value of private field
    if (typeof newAge === 'number' && newAge > 0 && newAge <= 120) {
      this.#age = newAge;
      return true;
    } else {
      return false;
    }
  }
}

let john = new Person('John Doe', 25);
console.log(john.name); // Output: John Doe
console.log(john.getAge()); // Output: 25
john.setAge(30);
console.log(john.getAge()); // Output: 30

//   console.log(john.#age);  // Uncaught SyntaxError: Private field '#age' must be declared in an enclosing class

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  getMajor() {
    return this.major;
  }

  setMajor(newMajor) {
    this.major = newMajor;
  }
}

const student = new Student('John Doe', 20, 'Computer Science');
console.log(student.name); // Output: John Doe
console.log(student.age); // Output: undefined
console.log(student.getAge());
