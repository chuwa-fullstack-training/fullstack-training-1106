interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  },
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  },
];

// fix the error showing in the following code:
function logPerson(person: Person) {
  let additionalInformation: string;
  if (person.role) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

function logPersonFix(person: Person) {
  let additionalInformation: string = '';
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    if ('occupation' in person) {
      additionalInformation = String(person.occupation);
    };
  }
  let name: string = ('name' in person) ? (person.name) : '';
  let age: number = ('age' in person) ? (person.age) : NaN;
  console.log(` - ${name}, ${age}, ${additionalInformation}`);
}


persons.forEach(logPerson);
