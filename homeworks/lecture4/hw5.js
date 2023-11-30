// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

// console.log(data);

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    return JSON.parse(JSON.stringify(cloneDeepWithLoop(obj)));
}

// console.log(cloneDeepWithLoop(data));