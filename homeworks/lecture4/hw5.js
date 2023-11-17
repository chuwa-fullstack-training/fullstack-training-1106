// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;
const cloneDeepWithLoop = (obj) => {
    var map = new Map();  // old object: new object
    function deepClone(inputObj) {
        let result = {};
        map.set(inputObj, result);
    
        for (let key in inputObj) {
            if (typeof (inputObj[key]) === "object") {
                if (map.has(inputObj[key])) {
                    result[key] = map.get(inputObj[key]);
                } else {
                    result[key] = deepClone(inputObj[key]);
                    map.set(inputObj[key], result[key]);
                }
            } else {
                result[key] = inputObj[key];
            }
        }
        return result;        
    }
    return deepClone(obj);
}

// Test Case: Basic Object with Circular Reference
const data = {
    name: 'foo',
    child: null
};
data.child = data;

const clonedData = cloneDeepWithLoop(data);

console.assert(clonedData !== data, "The cloned object should be a different instance.");
console.assert(clonedData.name === data.name, "Property values should be equal.");
console.assert(clonedData.child === clonedData, "Circular references should be maintained.");


// Nested Object with Circular Reference
const nestedObj = {
    name: 'parent',
    child: {
        name: 'child'
    }
};
nestedObj.child.parent = nestedObj;

const clonedNestedObj = cloneDeepWithLoop(nestedObj);

console.assert(clonedNestedObj !== nestedObj, "The cloned object should be a different instance.");
console.assert(clonedNestedObj.child !== nestedObj.child, "Nested objects should also be different instances.");
console.assert(clonedNestedObj.child.parent === clonedNestedObj, "Circular reference should be maintained in nested object.");
