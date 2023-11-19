// write a function to deep clone an object with circular reference
// 
const data = {
    name: 'foo',
    child: null
}
data.child = data;

const cloneDeepWithLoop = (obj) => {
  // Implement the function here

  // [reference]: cloned reference
  const objRecords = new WeakMap();

  // clone for one layer
  const cloneByLayer = (o) => {
    
    // not an object, ready for clone
    if (typeof o !== 'object') {
      return o;
    }

    // circular reference, return the recorded reference
    if (objRecords.has(o)) {
      return objRecords.get(o);
    }

    // object -> create new object, record, and clone
    const clone = {};
    objRecords.set(o, clone);
    Object.entries(o).forEach(([key, val]) => {
      clone[key] = cloneByLayer(val);
    })
    return clone;
  }

  return cloneByLayer(obj);

}

dataClone = cloneDeepWithLoop(data);
console.log(data)
console.log(dataClone);
console.log(dataClone == data)