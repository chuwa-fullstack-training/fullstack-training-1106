//write a function to deep clone an object with circular reference

const data = {
    name: 'foo',
    child: null
}
data.child = data;

function deepClone(obj, map = new Map()) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Check if the object has already been visited
  if (map.has(obj)) {
    return map.get(obj);
  }

  // Handle circular references
  const cloneObj = Array.isArray(obj) ? [] : {};

  // Mark the object as visited
  map.set(obj, cloneObj);

  // Clone each property
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], map);
    }
  }

  return cloneObj;
}


const clone = deepClone(data);
console.log(clone.child);

