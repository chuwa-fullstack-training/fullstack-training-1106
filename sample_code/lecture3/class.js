class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log('Bark!');
  }

  sayMyName() {
    console.log('My name is', this.name);
  }

  fetch() {
    console.log('Fetch!');
  }
}

const dog = new Dog('dog', 1);

class Animal {
  constructor(name) {
    this.name = name;
    this.live = 1;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
    this.type = 'feline';
    this.live = 9;
  }

  speak() {
    console.log(`${this.name} meows.`);
  }

  scratch() {
    console.log(`${this.name} scratches.`);
  }
}

const cat1 = new Cat('cat1');
cat1.speak();
