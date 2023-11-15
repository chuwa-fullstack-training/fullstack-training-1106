// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

// const cloneDeepWithLoop = (obj) => {
//     const stack = [];
//     const map = new Map();
//     const newObj = {};
//     stack.push({
//         parent: newObj,
//         key: undefined,
//         data: obj
//     });
//     map.set(obj, newObj);

// }  
const cloneDeepWithLoop = (obj) => {
    const stack = [];
    const map = new Map();
  
    const copyValue = (value) => {
      if (typeof value === 'object' && value !== null) {
        if (map.has(value)) {
          return map.get(value);
        }
  
        const newValue = Array.isArray(value) ? [] : {};
        map.set(value, newValue);
  
        for (let key in value) {
          if (value.hasOwnProperty(key)) {
            stack.push({
              parent: newValue,
              key: key,
              data: value[key]
            });
          }
        }
  
        return newValue;
      }
  
      // For primitives or null
      return value;
    };
  
    let currentItem;
    let rootClone;
  
    while (stack.length > 0) {
      currentItem = stack.pop();
      const { parent, key, data } = currentItem;
  
      if (key === undefined) {
        // The root object
        rootClone = copyValue(data);
      } else {
        parent[key] = copyValue(data);
      }
    }
  
    return rootClone;
  };
  
  // Example usage:
//   const originalObject = {
//     prop: 'value',
//     nested: {
//       array: [1, 2, { key: 'nestedValue' }],
//     },
//   };
  
//   originalObject.circularRef = originalObject;
  
//   const clonedObject = cloneDeepWithLoop(originalObject);
  
//   console.log(clonedObject);
  // Output: { prop: 'value', nested: { array: [1, 2, { key: 'nestedValue' }] }, circularRef: [Circular] }
  
const data = {
    name: 'foo',
    child: null
}       
const clone = cloneDeepWithLoop(data);
console.log(clone.child);
