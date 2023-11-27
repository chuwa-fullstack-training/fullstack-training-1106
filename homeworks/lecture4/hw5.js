// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    let result = Array.isArray(obj) ? [] : {};
    for (let i in obj){
        if (obj.hasOwnProperty(i)){
            result[i] = cloneDeepWithLoop(obj[i]);
        }
    }
    return result;
}

