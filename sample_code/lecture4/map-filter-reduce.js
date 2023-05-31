// Map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Filter
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]

// Reduce
const sum = numbers.reduce((acc, num) => acc + num, 0);

console.log(sum); // Output: 15

const employees = [
    { name: 'Zhang', jobTitle: 'Software Engineer', country: 'China' },
    { name: 'Jack', jobTitle: 'Data Scientist', country: 'USA' },
    { name: 'Jane', jobTitle: 'Project Manager', country: 'China' },
    { name: 'Rajesh', jobTitle: 'Software Engineer', country: 'India' }
];

const groupByCountry = employees.reduce((group, employee) => {
    if (!group[employee.country]) {
        group[employee.country] = [];
    }
    group[employee.country].push(employee);
    return group;
}, {});

console.log(groupByCountry);
  