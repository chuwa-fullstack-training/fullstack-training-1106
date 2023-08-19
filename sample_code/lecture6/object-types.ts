interface Triangle {
  readonly shape: string;
  side1?: number;
  side2?: number;
  side3?: number;
  height?: number;
  base?: number;
}

let triangle: Triangle = {
  shape: 'triangle',
  side1: 3,
  side2: 4,
  side3: 5
};

let triangle2: Triangle = {
  shape: 'triangle',
  height: 3,
  base: 4
};
triangle2.shape = 'shape'; // Error: Cannot assign to 'shape' because it is a read-only property.

// index signature
interface StringArray {
  [index: number]: string;

  length: number; // ok, length is a number
}

const myArray: StringArray = ['Bob', 'Fred'];
const myStr: string = myArray[0];

interface NumberDictionary {
  [key: string]: number | string;

  length: number;
  name: string; // Error: Property 'name' of type 'string' is not assignable to string index type 'number'.
}

let nd: NumberDictionary = {
  length: 1,
  name: 'number dictionary',
  one: 1
};

// Excess Property Checks
interface SquareConfig {
  color?: string;
  width?: number;

  // [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || 'white',
    area: config.width ? config.width * config.width : 20
  };
}

let mySquare: SquareConfig = createSquare({ colour: 'red', width: 100 });
// let mySquare: SquareConfig = createSquare({ colour: "red", width: 100 } as SquareConfig);

// Extending Interfaces
interface CustomArrayLike {
  length: number;

  [index: number]: string;
}

interface WithToString {
  toStringReversed: () => void;
}

interface CustomArray extends CustomArrayLike, WithToString {}

const customArray: CustomArray = {
  length: 3,
  toStringReversed: () => {
    console.log('reversed');
  },
  [0]: 'a',
  [1]: 'b',
  [2]: 'c'
};
console.log(customArray[0]);

export {};
