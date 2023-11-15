Explain following code: [JS]

function Person() {

}

Person.prototype.name = 'Cooper';

let person1 = new Person();
let person2 = new Person();
console.log(person1.name, person2.name) // what is the output and why?

Person.prototype = {
	name: 'Alex',
	sayMyName: function () {
		console.log(this.name)
	}
}
let person3 = new Person();
person1.sayMyName() // what is the output and why?

console.log(person1.name) // what is the output and why?

person3.sayMyName() // what is the output and why?


In the given code, a constructor function Person() is defined. The constructor function does not take any arguments and does not have any specific implementation within its body.

The name property is added to the prototype of the Person function using Person.prototype.name = 'Cooper'. When an object is created using the new keyword and the Person constructor function, the newly created object inherits the properties and methods from the Person.prototype.

Two objects, person1 and person2, are created using the new Person() syntax, invoking the Person constructor function. Both objects will have the name property inherited from the Person.prototype and will have the value 'Cooper'.

Therefore, when console.log(person1.name, person2.name) is executed, it will output: