What differences between null and undefined? [JS]




Answer:



1. `null` is intended to be an empty value, while `undefined` indicates empty by system
2. `undefined` - A variable that has been declared but has not been assigned a value. In other words, it's the default value for uninitialized variables.
`null` - is an assignment value. It can be assigned to a variable to represent no value or no object.
3. `Number(null)` is 0, `Number(undefined)` is NaN
4. In summary, undefined is typically used for variables that have been declared but not initialized, while null is used to represent the absence of an object or to clear a variable's value.