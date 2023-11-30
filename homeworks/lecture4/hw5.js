// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj, clones = new Map()) => {
    if (obj === null || typeof obj !== 'object') {
      return obj;
    }
  
    if (clones.has(obj)) {
      return clones.get(obj);
    }
  
    const clone = Array.isArray(obj) ? [] : {};
  
    clones.set(obj, clone);
  
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clone[key] = cloneDeepWithLoop(obj[key], clones);
      }
    }
  
    return clone;
  };
  const newData = cloneDeepWithLoop(data);
console.log(newData); // Output: { name: 'foo', child: [Circular] }