// intersection
function printId2(id: number & string) {
  console.log('Your ID is: ' + id);
}

printId2(101);

let user: { name: string } & { age: number } = {
  name: 'Aaron',
  age: 99
};
