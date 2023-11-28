interface PersonOverload {
  name: string;
  age: number;
}

interface Employee {
  name: string;
  salary: number;
}

function getDetails(person: PersonOverload): string;
function getDetails(employee: Employee): string;
function getDetails(personOrEmployee: PersonOverload | Employee): string {
  return `Name: ${personOrEmployee.name}, Age/Salary: ${
    'age' in personOrEmployee ? personOrEmployee.age : personOrEmployee.salary
  }`;
}

const person1: PersonOverload = { name: 'John', age: 30 };
const employee: Employee = { name: 'Jane', salary: 50000 };
const personDetails = getDetails(person1); // personDetails is a string
const employeeDetails = getDetails(employee); // employeeDetails is a string
const invalidDetails = getDetails({ name: 'Bob' }); // Error: No overload matches this call

// writing good overloads
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any): number {
  return x.length;
}

// here is the right way to do it
// function len(x: any[] | string): number {
//     return x.length;
// }

len('hello');
len([0, 1, 2]);
len(Math.random() > 0.5 ? 'hello' : [0, 1, 2]);


