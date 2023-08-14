const fruits = new Set();

// Add items to the Set
fruits.add('Apple');
fruits.add('Banana');
fruits.add('Orange');
fruits.add('Apple'); // Adding a duplicate item has no effect

// Get the size of the Set
console.log(`Number of fruits: ${fruits.size}`);

// Check if an item exists in the Set
console.log(`Does Banana exist? ${fruits.has('Banana')}`);

// Delete an item from the Set
fruits.delete('Orange');

// Iterate over the items of the Set
fruits.forEach(fruit => {
  console.log(fruit);
});

// Map
const employeeRoles = new Map();
employeeRoles.set('John', 'Manager');
employeeRoles.set('Alice', 'Software Engineer');
employeeRoles.set('Bob', 'UI Designer');

console.log(employeeRoles); // Original Map

for (let [employee, role] of employeeRoles) {
  console.log(`${employee} is a ${role}`);
}

employeeRoles.size;

employeeRoles.delete('Alice'); // Remove Alice from the Map

console.log(employeeRoles); // Updated Map

console.log(Array.from(employeeRoles)); // Convert Map to Array
