20. Create a function named setDefault which takes an argument of any value and returns a function, which when passed a truthy argument, returns that truthy argument, and when passed a falsy argument, returns the original argument passed to setDefault.

For example:

setDefault(72)(true) should return true
setDefault('foobar')(false) should return 'foobar'
