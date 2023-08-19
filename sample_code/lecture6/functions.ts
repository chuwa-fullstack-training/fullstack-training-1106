// Function type expressions
type Operator = (a: number, b: number) => number;

function operate(a: number, b: number, op: Operator) {
  return op(a, b);
}

let result = operate(1, 2, (a, b) => a + b);

// Constructor type expressions
interface Person {
  name: string;
  sayHello: () => void;
}

class PersonImpl implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello = () => {
    console.log(`Hello ${this.name}`);
  };
}

type PersonConstructor = new (name: string) => Person;

function createPerson(ctor: PersonConstructor, name: string) {
  return new ctor(name);
}

let person = createPerson(PersonImpl, 'Aaron');
person.sayHello();

// Generic functions
function firstElement(arr: any[]): any {
  return arr[0];
}

// function firstElement<Type>(arr: Type[]): Type | undefined {
//   return arr[0];
// }

let s = firstElement(['a', 'b', 'c']);
console.log(s);

// Generic inference
function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

let parsed = map(['1', '2', '3'], n => parseInt(n));
console.log(parsed);

// Generic constraints
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

let longerArray = longest([1, 2], [1, 2, 3]);
console.log(longerArray);
let longerString = longest('alice', 'bob');
console.log(longerString);
// Error: Argument of type 'number' isn't assignable to 'string'.
let longerNumber = longest(10, 100);

export {};
