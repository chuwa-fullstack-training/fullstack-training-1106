// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj) => {
    // Implement the function here
    var myCopy = structuredClone(obj);
    return myCopy;

}
const data = {
        name: 'foo',
        child: null
    }
const data2 = {
        name:'foo2',
        child2:null
}

data.child = data;
data2.child2 = data2;
const deepy = cloneDeepWithLoop(data);
const deepy2 = cloneDeepWithLoop(data2);
console.log(deepy);
console.log(deepy2);
