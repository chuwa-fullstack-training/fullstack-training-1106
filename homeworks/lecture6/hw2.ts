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
function isUser(person: Person): person is User {
  return (person as User).occupation !== undefined;
}

function logPerson(person: Person) {
  let additionalInformation: string;

  if (isUser(person)) {
    additionalInformation = person.occupation;
  } else {
    additionalInformation = person.role;
  }

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);