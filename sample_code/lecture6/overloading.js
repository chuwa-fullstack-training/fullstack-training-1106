function getDetails(personOrEmployee) {
    return "Name: ".concat(personOrEmployee.name, ", Age/Salary: ").concat('age' in personOrEmployee ? personOrEmployee.age : personOrEmployee.salary);
}
var person1 = { name: 'John', age: 30 };
var employee = { name: 'Jane', salary: 50000 };
var personDetails = getDetails(person1); // personDetails is a string
var employeeDetails = getDetails(employee); // employeeDetails is a string
function len(x) {
    return x.length;
}
// here is the right way to do it
// function len(x: any[] | string): number {
//     return x.length;
// }
len('hello');
len([0, 1, 2]);
// len(Math.random() > 0.5 ? 'hello' : [0, 1, 2]);
