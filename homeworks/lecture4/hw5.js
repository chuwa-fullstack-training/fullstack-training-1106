// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

/**
 * A variant of leetcode #133
 */
const cloneDeepWithLoop = (obj) => {
    // Implement the function here
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;
console.log(JSON.parse(JSON.stringify(data)));