// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, clones = new Set()) => {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    if(clones.has(obj)){
        return obj;
    }
    clones.add(obj);
    const newCopy = {};
    for(const key in obj) {
        newCopy[key] = cloneDeepWithLoop(obj[key], clones);
    }
    return newCopy;
}


const data = {
    name: 'foo',
    child: null
};
data.child = data;

const newData = cloneDeepWithLoop(data);
console.log(newData); // Output: { name: 'foo', child: [Circular] }
