function Person(name) {
  this.name = name;
  this.sayName1 = () => {
    console.log(this.name);
  };
  this.sayName2 = function(){
    console.log(this.name);
  };
}

//my try
// function Person1(name) {
//   function add(name){
//     console.log(name);
//   }
//   return add;
// }
// var per = new Person1(2);
// per(2);

// function sub(rt){
//   // this.rt = rt;
//   console.log(this.rt);
// }

// var ppp = new sub(3);
// ppp.prototype.abc = function(){
//   console.log(4);
// }

// ppp(3);

//jiezhi

const person = new Person('Aaron');
const a = Person('kkk');
person.sayName1(); // Aaron

const sayPersonName1 = person.sayName1;
sayPersonName1(); // undefined

const sayPersonName2 = person.sayName2;
sayPersonName2(); // undefined
sayPersonName2();
const m = this;
sayPersonName2.call(this);
console.log(9);
sayPersonName2.call(person); // Aaron
sayPersonName2.call(globalThis);

// const another = new Person('Alex');
// sayPersonName.call(another);

// change this.sayName to arrow function
