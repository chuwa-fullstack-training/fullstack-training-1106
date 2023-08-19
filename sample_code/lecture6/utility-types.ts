// Partial<T>
interface Person {
  name: string;
  age?: number;
  job?: string;
}

function updatePerson(person: Person, updates: Partial<Person>): Person {
  return { ...person, ...updates };
}

const person: Person = {
  name: 'John',
  age: 30,
  job: 'Software Engineer'
};

const updatedPerson = updatePerson(person, { age: 31, job: 'Manager' });
console.log(updatedPerson);

// Required<T>
const person1: Required<Person> = {
  name: 'John',
  age: 30
  // job: "Software Engineer",
};

// Readonly<T>
const person2: Readonly<Person> = {
  name: 'John',
  age: 30,
  job: 'Software Engineer'
};

person2.age = 31;

// Record<K,T>
type CountryCode = 'US' | 'CA' | 'MX';
const people: Record<CountryCode, Person[]> = {
  US: [{ name: 'John', age: 30 }],
  CA: [{ name: 'Jane', age: 25 }],
  MX: [{ name: 'Bob', age: 40 }]
};

console.log(people.US);
console.log(people.CA);
console.log(people.MX);

// Pick<T,K>
interface Employee {
  name: string;
  age: number;
  job: string;
  address: string;
}

function printPersonInfo(person: Pick<Employee, 'name' | 'age'>) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const person3: Pick<Employee, 'name' | 'age'> = {
  name: 'John',
  age: 30,
  job: 'Software Engineer'
  // address: "123 Main St",
};

printPersonInfo(person3); // Output: Name: John, Age: 30

// Omit<T,K>
function printPersonInfo2(person: Omit<Employee, 'job' | 'address'>) {
  console.log(`Name: ${person.name}, Age: ${person.age}`);
}

const person4: Employee = {
  name: 'John',
  age: 30,
  job: 'Software Engineer',
  address: '123 Main St'
};

printPersonInfo2(person4); // Output: Name: John, Age: 30

// Exclude<T,U>
type Animal = 'dog' | 'cat' | 'bird' | 'fish';
type DomesticAnimal = 'dog' | 'cat';

type WildAnimal = Exclude<Animal, DomesticAnimal>;

const wildAnimal: WildAnimal = 'bird';
console.log(wildAnimal); // Output: bird

// Extract<T,U>
type PetAnimal = Extract<Animal, DomesticAnimal>;

const petAnimal: PetAnimal = 'dog';
console.log(petAnimal); // Output: dog

// ReturnType<T>
function add(a: number, b: number): number {
  return a + b;
}

type AddReturnType = ReturnType<typeof add>;

const result: AddReturnType = 5;
console.log(result); // Output: 5

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
const nums: T3 = [1, 2, 3, 4, 5];

export {};
