// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (map.has(obj)) {
        return map.get(obj);
    }

    const result = Array.isArray(obj) ? [] : {};

    map.set(obj, result);

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = cloneDeepWithLoop(obj[key], map);
        }
    }

    return result;
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;

const deepCloneData = cloneDeepWithLoop(data);
console.log(deepCloneData);