12. When do you use a return type of `never` and how does it differ from `void`? [Typescript]
























printName(name: string): void {
  console.log(name);
}

const printer = printName('Will');
console.log(printer); // logs "undefined"


const error = (): never => {
  throw new Error("");
};