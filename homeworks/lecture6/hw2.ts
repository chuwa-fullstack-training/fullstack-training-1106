interface User2 {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = User2 | Admin;

const persons: Person[] = [
  {
    name: "Aaron",
    age: 99,
    occupation: "TypeScript Developer",
  } as User2, // use type assertion
  {
    name: "Alex",
    age: 98,
    role: "System Administrator",
  } as Admin, // use type assertion
];

// fix the error showing in the following code:
function logPerson(person: Person) {
  let additionalInformation: string;
  if ('role' in person) { // use `in` to check if person has role
    additionalInformation = person.role;
  } else {
    additionalInformation = person.occupation;
  }
  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
