// type: number
let count: number = 5;

// type: string
let firstName: string = 'Aaron';

// type: boolean
let checked: boolean = true;

// type: array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// type: tuple
let x: [string, number] = ['hello', 10];

// type: enum
// const Direction = {
//   Up: 'Up',
//   Down: 'Down'
// }
enum Direction {
  Up,
  Down,
  Left,
  Right
}
let up: Direction = Direction.Up;

// type: any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = [1, 2, 3];

let another: string = notSure;

// type: unknown
let userInput: unknown;

userInput = 5;
userInput = 'Aaron';

let userName: string = userInput;
let userName2: any = userInput;
// let userName3: number = notSure;

// type: object
let obj1: object = { name: 'Aaron' };
let obj2: object = function () {};
let obj3: object = [1, 2, 3];

// type: void
function logMessage(): void {
  console.log('This is a message');
}

let unusable: void = undefined || null; // strictNullChecks - false

// type: never
function error(message: string): never {
  throw new Error(message);
}

type Foo = string | number;
function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === 'string') {
    // string
    foo.toLowerCase();
  } else if (typeof foo === 'number') {
    // number
  } else {
    // never
    const check: never = foo;
  }
}
// type Foo = string | number | boolean;

// type: null & undefined
let n: null = null;
let u: undefined = undefined;
let n2: number = null;
let u2: number = undefined;
// --strictNullChecks

export {};
