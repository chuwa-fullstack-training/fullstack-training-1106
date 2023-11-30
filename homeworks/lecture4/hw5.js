// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;
const helper = (obj, map) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    if (map.has(obj)) {
        return map.get(obj);
    }
    let newObj = {};
    map.set(obj, newObj);
    for (let key in obj) {
        newObj[key] = helper(obj[key], map);
    }
    return newObj;
}

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let map = new Map();
    return helper(obj, map);
}
data2 = cloneDeepWithLoop(data);
console.log(data2 === data); // false
console.log(data2.name === data.name); // true
console.log(data2.child === data2); // true