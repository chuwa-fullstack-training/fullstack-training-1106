23.  Explain following code:

const arrA = [1,3,4,5];
const arrB=[1,2,5,6,7];

const c = [...new Set([...arrA, ...arrB])];
console.log(c);

[]










// union and dedup --> [1, 2, 3, 4, 5, 6, 7]