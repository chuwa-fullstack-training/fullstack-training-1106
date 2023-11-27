// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
    // Implement the function here
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (map.has(obj)) {
        return map.get(obj);
    }
    let new_copy = Array.isArray(obj) ? [] : {};
    map.set(obj, new_copy);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            new_copy[key] = cloneDeepWithLoop(obj[key], map);
        }
    }
    return new_copy;
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;
const new_data = cloneDeepWithLoop(data);
console.log(new_data);