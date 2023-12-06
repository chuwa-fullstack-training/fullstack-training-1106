3. 
Create a function named promisifyValue which takes an argument of any type and returns a Promise which resolves to that value.

For example:

await promisify(2) should return 2
await promisify(3).then(val => val + 1) should return 4
