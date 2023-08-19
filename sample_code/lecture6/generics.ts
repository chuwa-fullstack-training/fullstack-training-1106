// Guidelines for writing good generic functions
// 1. Use multiple type parameters to describe all the types of a function's arguments.
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// function add<Type>(a: Type, b: Type): Type {
//   return a + b;
// }

const mergedObj = merge({ name: 'John' }, { age: 30 });
console.log(mergedObj); // Output: { name: 'John', age: 30 }

// 2. Use type parameters that are constrained by default.
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user1 = { name: 'John', age: 30, address: '123 main st' };
const name1 = getProperty(user1, 'name');
const age = getProperty(user1, 'age');
const address = getProperty(user1, 'address'); // Error: Argument of type 'address' isn't assignable to 'name' | 'age'
// const array1 = [1, 2, 3];
// getProperty(array1, 1);

// 3. Use keyof to describe index types.
function pluck<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key]);
}

const user2 = { name: 'John', age: 30, address: '123 Sesame St' };
const nameAndAge = pluck(user2, ['name', 'age']);
console.log(nameAndAge); // Output: ['John', 30]

// 4. Use mapped types to describe generic objects.
type Optional<T> = {
  [K in keyof T]?: T[K];
  // name?: string;
  // age?: number;
};

interface Person {
  name: string;
  age: number;
}

const optionalPerson: Optional<Person> = { name: 'John' };
console.log(optionalPerson); // Output: { name: 'John' }

// 5. Use type parameters to describe relationships between arguments.
function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
  return arr1.map((value, index) => [value, arr2[index]]);
}

const zipped = zip([1, 2, 3], ['a', 'b', 'c']);
console.log(zipped); // Output: [[1, 'a'], [2, 'b'], [3, 'c']]

// 6. Use type parameters to enforce relationships between types.
function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const mergedNumbers = mergeArrays([1, 2, 3], [4, 5, 6]);
console.log(mergedNumbers); // Output: [1, 2, 3, 4, 5, 6]

const strings = mergeArrays(['a', 'b'], ['c', 'd']);
console.log(strings); // Output: ['a', 'b', 'c', 'd']

const invalidMerge = mergeArrays([1, 2, 3], ['a', 'b']); // Error: Argument of type 'string[]' is not assignable to parameter of type 'number[]'

// 7. Use type parameters to describe the shape of callbacks.
function mapWithCallback<T, U>(
  arr: T[],
  callback: (value: T, index: number, array: T[]) => U
): U[] {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}

const numbers = [1, 2, 3];
const doubledNumbers = mapWithCallback(numbers, num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]

export {};
