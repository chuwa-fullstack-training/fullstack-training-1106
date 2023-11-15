// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const newObj = { ...obj };
    for(const k in obj) {
        if(obj[k] === obj) {
            newObj[k] = newObj;
        }
    }
    return newObj;
}

const data = {
    name: 'foo',
    child: null,
}
data.child = data;

const newData = cloneDeepWithLoop(data);
console.log(newData === data.child);
console.log(newData === newData.child);
console.log(newData);