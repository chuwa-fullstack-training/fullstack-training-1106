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
  if ('role' in person) {
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);


// 或者
interface Person1 {
  name: string;
  age: number;
  occupation?: string;
  role?: string;
}

const persons1: Person1[] = [
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
function logPerson1(person: Person1) {
  let additionalInformation: string;
  if (person.role) {
    additionalInformation = person.role;
  } else if (person.occupation) {
    additionalInformation = person.occupation;
  } else {
    additionalInformation = ""
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons1.forEach(logPerson1);
