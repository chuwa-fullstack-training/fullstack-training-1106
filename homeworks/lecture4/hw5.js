// write a function to deep clone an object with circular reference
// 
// const data = {
//     name: 'foo',
//     child: null
// }
// data.child = data;

const cloneDeepWithLoop = (obj, clonedObjects = new Map()) => {
    // If the object is primitive or null, return it directly
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    // If the object has already been cloned, return the cloned instance
    if (clonedObjects.has(obj)) {
      return clonedObjects.get(obj);
    }
  
    // Create a new instance of the object
    const clone = Array.isArray(obj) ? [] : {};
  
    // Store the cloned instance in the map to handle circular references
    clonedObjects.set(obj, clone);
  
    // Clone each property recursively
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = cloneDeepWithLoop(obj[key], clonedObjects);
      }
    }
  
    return clone;
  };