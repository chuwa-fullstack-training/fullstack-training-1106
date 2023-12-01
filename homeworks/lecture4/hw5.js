// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    let newObj = {};
    for(let key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
}
/////////////// test cases below ////////////////////////////////
const data = {
        name: 'foo',
        child: null
    }
    data.child = cloneDeepWithLoop(data);
    // data.name = 'test';
    console.log(data);

   