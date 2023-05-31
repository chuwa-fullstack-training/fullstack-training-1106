function Person(name) {
  this.name = name;
  this.sayName = () => {
    console.log(this.name);
  }
}

const person = new Person('Aaron');
person.sayName(); // Aaron

const sayPersonName = person.sayName;
sayPersonName(); // undefined
