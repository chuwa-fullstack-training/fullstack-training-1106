/**
 * __proto__
 */
const dogPrototype = {
  breed: 'Shepard',
  bark: function () {
    console.log('Bark!');
  },
  sayMyName: function () {
    console.log('My name is', this.name);
  },
  fetch: function () {
    console.log('Fetch!');
  }
};

// create many dogs
let dogs = [];
for (let i = 0; i < 10; i++) {
  const dog = {};
  dog.name = 'dog' + i;
  dog.age = i;
  // dog.bark = function () {}
  // dog.fetch = function () {}
  dog.__proto__ = dogPrototype;
  dogs.push(dog);
}
dogs[0].sayMyName(); // My name is dog0

// improvement
function Dog(name, age) {
  const dog = {};
  dog.__proto__ = Dog.prototype;
  dog.name = name;
  dog.age = age;

  return dog;
}

Dog.prototype.bark = function () {
  console.log('Bark!');
};
Dog.prototype.sayMyName = function () {
  console.log('My name is', this.name);
};
Dog.prototype.fetch = function () {
  console.log('Fetch!');
};

dogs = [];
for (let i = 0; i < 10; i++) {
  dogs.push(Dog('dog' + i, i));
}

dogs[0].sayMyName(); // My name is dog0

// syntactic sugar
function Cat(name, age) {
  this.name = name;
  this.age = age;
}

Cat.prototype.sayMyName = function () {
  console.log('My name is', this.name);
};

const cat = new Cat('cat', 3);
cat.sayMyName(); // My name is cat
// cat.sayMyName.call(cat);
