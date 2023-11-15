// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

var map = new Map();
const cloneDeepWithLoop = (obj) => {
    // Implement the function here, assume 'obj' is either primitive or object
    // if the input 'obj' is null or is not an object at all (like primitive types), just return it
    if (obj === null || typeof obj !== 'object') return obj;
    // if this obj was already cloned before, just return the cloned object
    if (map.has(obj)) return map.get(obj);
    
    const clonedObj = {};
    map.set(obj, clonedObj);

    for (let key in obj) {
        clonedObj[key] = cloneDeepWithLoop(obj[key]);
    }
    return clonedObj;
}

// test
const data = {
    name: 'foo',
    child: null
}
data.child = data;
console.log(data === data.child);               // true

const clonedData = cloneDeepWithLoop(data);
console.log(clonedData === clonedData.child);   // true