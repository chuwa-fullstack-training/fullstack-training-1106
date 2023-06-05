let newObj: { name: string } = { name: 'Aaron' };

function logName(obj: { name: string }) {
  console.log(obj.name);
}

logName(newObj);

function greeting(person: { firstName: string; lastName?: string }): void {
    console.log(`Hello ${person.firstName} ${person.lastName}`);
}

greeting({ firstName: 'Aaron' });

function printUserInfo(user: { name: string; age: number, [propName: string | symbol]: any }) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

printUserInfo({ name: 'Aaron', age: 99, favoriteColor: 'blue' });