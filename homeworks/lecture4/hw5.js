// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

console.log(data);

const visited = {};
const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    const new_obj = {};
    if (typeof obj !== "object") {
        return obj;
    }

    if (visited[obj]) {
        return visited[obj];
    }
    
    visited[obj] = new_obj;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            new_obj[key] = cloneDeepWithLoop(obj[key]);
        }
    }
    return new_obj;
}

console.log(cloneDeepWithLoop(data));