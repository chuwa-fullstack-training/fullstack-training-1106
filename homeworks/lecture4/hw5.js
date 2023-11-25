// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, map = new WeakMap()) => {
    if (map.has(obj)) {
      // If the object is already cloned, return the existing clone
      return map.get(obj);
    }
  
    // Handle special cases for non-object types
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    // Create a new object or array
    const clone = Array.isArray(obj) ? [] : {};
  
    // Save the clone in the map before cloning the properties to handle circular references
    map.set(obj, clone);
  
    // Clone each property recursively
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = cloneDeepWithLoop(obj[key], map);
      }
    }
  
    return clone;
  };
  
  // Example usage
  const data = {
    name: 'foo',
    child: null
  };
  data.child = data;
  
  const clonedData = cloneDeepWithLoop(data);
  console.log(clonedData);
  