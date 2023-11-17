// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new Map()) => {
    // Implement the function here
    if(typeof obj !== 'object' || obj == null){
        return obj;
    }

    if(map.has(obj)) return map.get(obj);

    let res = Array.isArray(obj)?[] : {};
    map.set(obj, res);

    for (let key of Object.keys(obj)) {
        res[key] = cloneDeepWithLoop(obj[key], map);
    }

    return res;
}

const data = {
    name: 'foo',
    child: null
}
data.child = data;

console.log(cloneDeepWithLoop(data));