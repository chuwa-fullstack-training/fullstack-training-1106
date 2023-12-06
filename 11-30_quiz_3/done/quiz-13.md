13. Create a function named safelyTraverse which takes an object as the first parameter and an array of strings as the second parameter.  The function should return the value found after treating each string as a key traversing the object.  If the path does not exist, the function should return undefined.

For example:

safelyTraverse({ first: { second: 2 } }, ['first', 'second']) should return 2
safelyTraverse({}, ['a', 'b']) should return undefined
