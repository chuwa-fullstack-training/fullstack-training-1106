const arr = [1, 2, 3];
const newArr = [...arr, 4, 5, 6];
const obj = { a: 1, b: 2 };
const newObj = { ...obj, c: 3 };
function foo(...args) {
 for (let i = 0; i < args.length; i++) {
 console.log(args[i]);
 }
}
foo(...newArr);