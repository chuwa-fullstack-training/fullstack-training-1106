What is the difference between == and === operators? 
what is the result of null == undefined and null === undefined ? [JS]



Answer:


1. JavaScript provides both strict(`===`, `!==`) and type-converting(`==`, `!=`) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables. The strict operators follow the below conditions for different types,
2. Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
3. Two numbers are strictly equal when they are numerically equal. i.e, Having the same number value. There are two special cases in this,
    1. `NaN` is not equal to anything, including `NaN`.
    2. Positive and negative zeros are equal to one another.
4. Two Boolean operands are strictly equal if both are true or both are false.
5. Two objects are strictly equal if they refer to the same Object.
6. `null` and `undefined` types are not equal with `===`, but equal with `==`. i.e, `null === undefined` --> false but `null == undefined` --> true

